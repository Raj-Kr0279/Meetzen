import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./ui/InputField";
import PageHeading from "./PageHeading";

const AddCompanies = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    id: "",
    address: "",
    logo: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      !isSubmitting &&
      form.name.trim() !== "" &&
      form.id.trim() !== "" &&
      form.address.trim() !== "" 
      // form.logo.trim() !== ""
    );
  }, [form, isSubmitting]);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Company name is required";
    if (!form.id.trim()) nextErrors.id = "Company ID is required";
    if (!form.address.trim()) nextErrors.address = "Company address is required";
    // if (!form.logo.trim()) nextErrors.logo = "Company logo is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleLogoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Keep it simple: store data URL so backend can save it as-is.
    // If backend expects multipart upload, this can be changed later.
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setForm((p) => ({ ...p, logo: result }));
      setErrors((prev) => ({ ...prev, logo: "" }));
    };
    reader.onerror = () => {
      setErrors((prev) => ({ ...prev, logo: "Failed to read the logo file" }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Backend in this repo currently only exposes GET /company-list.
      // This POST is implemented defensively; if the endpoint doesn't exist,
      // the UI will show a clear error.
      const res = await fetch("http://localhost:5000/api/company/add-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      // Reset after success (and/or redirect)
      setForm({ name: "", id: "", address: "", logo: "" });
      setErrors({});
      // navigate("/home");
    } catch (err) {
      setSubmitError(err?.message || "Failed to add company");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeading label="Add Companies" />

      <div className="md:pe-10 w-full flex flex-col">
        <div className="w-full px-10 min-h-screen bg-hover-bg">
          <form onSubmit={handleSubmit} className="max-w-3xl w-full pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Company Name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. NIIT Technologies Pvt. Ltd."
                error={errors.name}
              />

              <InputField
                label="Company ID"
                type="text"
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="e.g. cmp_niit_001"
                error={errors.id}
              />

              <div className="md:col-span-2">
                <InputField
                  label="Company Address"
                  type="textarea"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  rows={4}
                  error={errors.address}
                />
              </div>

              <div className="md:col-span-2">
                <InputField
                  label="Company Logo"
                  type="text"
                  name="logo"
                  value={form.logo ? "Logo selected" : ""}
                  onChange={() => {}}
                  placeholder="Select a logo file"
                  error={errors.logo}
                />

                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-meetFilterBlueLight file:text-primary"
                  />

                  {form.logo ? (
                    <img
                      src={form.logo}
                      alt="Company logo preview"
                      className="h-12 w-12 rounded-md border border-border object-contain bg-white"
                    />
                  ) : null}
                </div>
              </div>
            </div>

            {submitError ? (
              <div className="mt-6 text-error text-sm">{submitError}</div>
            ) : null}

            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={isSubmitting}
                className="border border-border px-5 py-3 rounded-md text-foreground hover:bg-hover-bg transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`bg-primary py-3 px-6 rounded-md text-white transition ${
                  !canSubmit ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Adding..." : "Add Company"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCompanies;

