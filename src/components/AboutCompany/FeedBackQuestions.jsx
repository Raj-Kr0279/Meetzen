import { AiOutlineMinus } from "react-icons/ai";

const steps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

export default function FeedbackQuestion({
  index,
  question,
  value,
  comment,
  onRatingChange,
  onCommentChange,
}) {
  return (
    <div className="mb-8">
      <p className="text-primary text-base">
        {index + 1}. <span>{question}</span>
      </p>

      <div className="pt-4 flex gap-4 w-4/12">
        <div className="w-full">
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={value}
            onChange={(e) => onRatingChange(Number(e.target.value))}
            className="w-full"
          />

          <div className="flex items-center gap-1 -mt-2">
            {steps.map((step) => (
              <div
                key={step}
                className="w-full flex flex-col items-center"
              >
                <AiOutlineMinus className="rotate-90 text-xs" />
                <span className="text-xs">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-20 h-10 border border-theme-color flex items-center justify-center font-bold">
          {value}
        </div>
      </div>

      <textarea
        value={comment}
        onChange={(e) => onCommentChange(e.target.value)}
        placeholder="Add your comments..."
        className="w-full h-32 mt-4 border rounded-md p-4 resize-none shadow-textarea"
      />
    </div>
  );
}