
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [contact, setContact] = useState({

    name: '',
    email: '',
    message: ''

  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await emailjs.send(

        'service_e761yci',
        'template_xaeuqza',

        {
          user_name: contact.name,
          user_email: contact.email,
          user_message: contact.message,

          to_email: '20255221@s.ubaguio.edu'
        },

        'feahIeQ5KRf17OGTk'

      );

      alert(
        "Message Sent Successfully!"
      );

      setContact({

        name: '',
        email: '',
        message: ''

      });

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="text-primary mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>
              Name
            </label>

            <input
              type="text"
              className="form-control"
              required
              value={contact.name}
              onChange={(e) =>
                setContact({
                  ...contact,
                  name: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Email
            </label>

            <input
              type="email"
              className="form-control"
              required
              value={contact.email}
              onChange={(e) =>
                setContact({
                  ...contact,
                  email: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Message
            </label>

            <textarea
              rows={5}
              className="form-control"
              required
              value={contact.message}
              onChange={(e) =>
                setContact({
                  ...contact,
                  message: e.target.value
                })
              }
            />

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  );
};

export default Contact;
