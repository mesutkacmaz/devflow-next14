import { Schema, model, models, Document } from "mongoose";

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId; // reference to user
  action: string;
  question: Schema.Types.ObjectId; // reference to question
  answer: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId[];
  createdAt: Date;
}

const InteractionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    answer: { type: Schema.Types.ObjectId, ref: "Answer" },
    tags: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false, versionKey: false }
);

const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
