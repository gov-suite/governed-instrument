// Generated from medigy-privacy-guidelines-evaluation-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "Medigy Privacy Guidelines Evaluation Facet",
  units: null,
  templateOptions: {
    obrHeader: false,
    hideUnits: true,
    hideHeader: true,
    allowHTMLInInstructions: true,
    allowMultipleEmptyRepeatingItems: false,
    showFormHeader: false,
    showColumnHeaders: false,
    hideFormControls: true,
  },
  items: [
    {},
    {
      question: "Privacy Guidelines",
      header: true,
      hideUnits: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          questionCode: "Q005-01",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Select",
                  options: [
                    "Identifiable Information - Sensitive Information",
                    "Personal Information",
                    "Others",
                  ],
                },
              },
            },
          },
          question: "Which of these data does your solution/app collect?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text:
                "Personally Identifiable Information - Sensitive Information",
              code: "Opt1",
            },
            {
              text: "Personal Information",
              code: "Opt2",
            },
            {
              text: "Others",
              code: "Opt3",
            },
          ],
        },
        {
          questionCode: "Q005-02",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Does your system make personal data available for other systems?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-03",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Does your solution have a section (tab, button or equivalent) or active link to its Privacy Policy?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-04",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Is there a a mechanism in place to notify users of changes to the Privacy Policy?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-05",
          question:
            "For sensitive data please evidence how valid consent is obtained?",
          questionCodeSystem: "Custom",
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
          dataType: "ST",
        },
        {
          questionCode: "Q005-06",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Is collection of personal and sensitive data made transparent to the user?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-07",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Do you provide a privacy notice to the user describing the purpose for which you intend to collect the personal or sensitive data?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-08",
          question:
            "Is the user aware who collects the information, how it is collected and how long it will be retained?",
          questionCodeSystem: "Custom",
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
          dataType: "ST",
        },
        {
          questionCode: "Q005-09",
          extensions: {
            qe3: {
              publication: {
                qe3_visualization: {
                  type: "Choice",
                  options: [
                    "Yes",
                    "No",
                  ],
                },
              },
            },
          },
          question:
            "Does your service/app enable the user to delete or request that you delete all their personal data irrespective of where it is held?",
          questionCodeSystem: "Custom",
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
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Opt1",
            },
            {
              text: "No",
              code: "Opt2",
            },
          ],
        },
        {
          questionCode: "Q005-10",
          question:
            "Does the solution use encryption to store personally identifiable data?",
          questionCodeSystem: "Custom",
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
          dataType: "ST",
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
