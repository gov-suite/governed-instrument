// Generated from onc-isa-general-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "ONC ISA General Facet",
  items: [
    {
      question: "Do you confirm to the Interoperability Standards Advisory?",
      questionCodeSystem: "Custom",
      questionCode: "ISA001",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "BL",
    },
    {
      question: "Which of the following specifications do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA002",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "CWE",
      answers: [
        {
          text:
            "Vocabulary/Code Sets/Terminology Standards and Implementation Specifications",
          code: "01",
        },
        {
          text: "Content/Structure Standards and Implementation Specifications",
          code: "02",
        },
        {
          text: "Standards and Implementation Specifications for Services",
          code: "03",
        },
        {
          text: "Administrative Standards and Implementation Specifications",
          code: "04",
        },
      ],
    },
    {
      question:
        "Which of the Vocabulary/Code Set/Terminology Standards and Implementation do you support?",
      questionCodeSystem: "Custom",
      questionCode: "ISA003",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: 1,
      },
      dataType: "CWE",
      answers: [
        {
          text: "Allergies and intolerance",
          code: "01",
        },
        {
          text: "Emergency Medical Services",
          code: "02",
        },
        {
          text: "Encounter Diagnosis",
          code: "03",
        },
        {
          text: "Family Health History",
          code: "04",
        },
        {
          text: "Functional Status/Disability",
          code: "05",
        },
        {
          text: "Health Care Providers, Family Members, and Other Caregivers",
          code: "06",
        },
        {
          text: "Imaging (Diagnostics, Interventions and Procedures)",
          code: "07",
        },
        {
          text: "Immunizations",
          code: "08",
        },
        {
          text: "Industry and Occupation",
          code: "09",
        },
        {
          text: "Laboratory",
          code: "10",
        },
        {
          text: "Medications",
          code: "11",
        },
        {
          text: "Nursing",
          code: "12",
        },
        {
          text: "Patient Clinical 'Problems' (i.e., conditions)",
          code: "13",
        },
        {
          text: "Preferred Language",
          code: "14",
        },
        {
          text: "Pregnancy Status",
          code: "15",
        },
        {
          text: "Procedures",
          code: "16",
        },
        {
          text: "Race and Ethnicity",
          code: "17",
        },
        {
          text: "Research",
          code: "18",
        },
        {
          text: "Sex at Birth, Sexual Orientation and Gender Identity",
          code: "19",
        },
        {
          text: "Social, Psychological, and Behavioral Data",
          code: "20",
        },
        {
          text: "Tobacco Use (Smoking Status)",
          code: "21",
        },
        {
          text: "Units of Measure",
          code: "22",
        },
        {
          text: "Vital Signs",
          code: "23",
        },
      ],
    },
  ],
  templateOptions: {
    showFormHeader: false,
    hideFormControls: true,
    obrHeader: false,
    hideUnits: true,
    hideHeader: true,
    allowHTMLInInstructions: true,
    allowMultipleEmptyRepeatingItems: false,
    showColumnHeaders: false,
  },
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
