import {Document} from 'mongoose'

export interface ITodo extends Document {
  title: string
  deadline: Date
  status: boolean
}