const Company = require("../models/Company");
const express = require("express");
const router = express.Router()

router.get('/get-companies', async (req, res) => {
  try {
    const companies = await Company.find();

    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});
router.post('/add-company', async (req, res) => {
  try {
    const { name, id, address, logo } = req.body
    const company = new Company({
      name, id, address, logo
    })
    const newCompany = await company.save()
    res.status(201).json(newCompany)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})
router.post('/findWithId', async (req, res) => {
  try {
    const { companyId } = req.body;
    const filteredCompany = await Company.findOne({companyId})
    if (!filteredCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json(filteredCompany);
  }
  catch (error) {
   res.status(400).json({ error: error.message });
  }
})
module.exports = router