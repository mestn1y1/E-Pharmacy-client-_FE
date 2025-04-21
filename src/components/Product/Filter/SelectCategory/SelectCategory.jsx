import Select from "react-select";

export default function SelectCategory({ setValue }) {
  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "Medicine", label: "Medicine" },
    { value: "Heart", label: "Heart" },
    { value: "Head", label: "Head" },
    { value: "Leg", label: "Leg" },
  ];

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "150%",
      color: "rgba(29, 30, 33, 0.4)",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "44px",
      borderRadius: "60px",
      border: state.isFocused
        ? "1px solid #59B17A"
        : "1px solid  rgba(29, 30, 33, 0.1);",
      "&:hover": {
        border: "1px solid #59B17A",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      border: "none",
      padding: "0 20px",
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.5",
      letterSpacing: "-0.03em",
      color: state.isSelected ? "#fff" : "#1D1E21",
      backgroundColor: state.isSelected ? "#59B17A" : "#fff",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <Select
      id="category"
      styles={customStyles}
      placeholder="Product category"
      isClearable
      options={categoryOptions}
      onChange={(value) => setValue("category", value?.value || "")}
    />
  );
}
