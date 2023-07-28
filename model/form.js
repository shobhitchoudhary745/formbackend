const mongoos = require("mongoose");

const formSchema = new mongoos.Schema({
  title: {
    type: String,
    default: "My Form",
    trim: true,
  }, 
  fields: [
    {
      question: {
        type: String,
        required: [true, "This is a required field"],
        trim: true,
      },
      answers: {
        type: String,
        trim: true,
      },
      placeholder: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
        required: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Form = mongoos.model("Form", formSchema);

module.exports = Form;
