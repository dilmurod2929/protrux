import React, { useMemo, useState } from "react";
import {
  FormContainer,
  Title,
  Subtitle,
  Label,
  Input,
  Textarea,
  RadioGroup,
  RadioLabel,
  Button,
  IconInputWrapper,
  FormBlock,
  ImgInput,
} from "./Contact";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const ContactUs = () => {
  const [formType, setFormType] = useState("personal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const [isNameValid, setIsNameValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false); // новое состояние для отслеживания фокуса email

  const { nameLabel, emailLabel, namePlaceholder, emailPlaceholder } =
    useMemo(() => {
      const isCompany = formType === "company";
      return {
        nameLabel: isCompany ? "Company name" : "Name",
        emailLabel: isCompany ? "Company email" : "Email",
        namePlaceholder: isCompany
          ? "Enter your company name"
          : "Enter your name",
        emailPlaceholder: isCompany
          ? "Enter your company email"
          : "Enter your email",
      };
    }, [formType]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(e.target.value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    setEmailTouched(true);

    if (status === "sending" || !isNameValid) return;

    if (!isEmailValid) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const payload =
      formType === "company"
        ? { companyName: name, companyEmail: email, message }
        : { name, email, message };

    try {
      const response = await fetch(
        "https://api.breezytms.com/leave-feedback-unauthorized",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Network error");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
      setEmailTouched(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <FormContainer>
      <Title>Contact us</Title>
      <Subtitle>
        We welcome your questions, feedback, and business inquiries. Please fill
        out the form below, and a member of our team will respond promptly.
      </Subtitle>

      <FormBlock>
        <Label>Write as</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="formType"
              value="personal"
              checked={formType === "personal"}
              onChange={() => setFormType("personal")}
            />
            Personal
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="formType"
              value="company"
              checked={formType === "company"}
              onChange={() => setFormType("company")}
            />
            Company
          </RadioLabel>
        </RadioGroup>

        <Label>{nameLabel}</Label>
        <IconInputWrapper>
          <ImgInput src="/Contact/person.svg" alt="person icon" />
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder={namePlaceholder}
          />
        </IconInputWrapper>
        {!isNameValid && isSubmitted && (
          <p style={{ color: "red", fontSize: "0.875rem", marginTop: "2px" }}>
            Please enter your name.
          </p>
        )}
        <Label>{emailLabel}</Label>
        <IconInputWrapper>
          <ImgInput src="/Contact/email.svg" alt="email icon" />
          <Input
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur} // Добавили обработчик потери фокуса
            placeholder={emailPlaceholder}
            style={{
              borderColor:
                emailTouched && email && !isEmailValid ? "red" : undefined,
            }}
          />
        </IconInputWrapper>
        {emailTouched && !isEmailValid && (
          <p style={{ color: "red", fontSize: "0.875rem", marginTop: "2px" }}>
            Please enter a valid email address.
          </p>
        )}

        <Label>Message</Label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />

        <Button
          onClick={handleSubmit}
          disabled={!isEmailValid || !isNameValid || status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </Button>

        {status === "success" && (
          <p style={{ color: "green", textAlign: "center", marginTop: "12px" }}>
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p style={{ color: "red", textAlign: "center", marginTop: "12px" }}>
            Something went wrong. Please try again.
          </p>
        )}
      </FormBlock>
    </FormContainer>
  );
};

export default ContactUs;
