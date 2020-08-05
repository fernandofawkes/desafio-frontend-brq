import {ITodo} from '../types/todo';
import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    min: () => Date.now()
  },
  status: {
    type: Boolean,
    required: true
  },
}, {timestamps: true});

export default model<ITodo>("Todo", todoSchema);