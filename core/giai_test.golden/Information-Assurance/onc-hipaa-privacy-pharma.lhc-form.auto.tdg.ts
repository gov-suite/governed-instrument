// Generated from onc-hipaa-privacy-pharma.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-001",
  name: "ONC HIPAA Privacy (Pharma)",
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
      question: "Privacy",
      header: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question: "Does your Company electronically store PI?",
          questionCode: "Q0022-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-01",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-01-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company transmit PI in either Electronic, paper or other forms of records?",
          questionCode: "Q0022-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-02",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company process PI, whether contained in Electronic, paper or other forms of records?",
          questionCode: "Q0022-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-03",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-03-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Privacy Notice and/or Privacy Policy on your Company website(s) for your Company online activities that involve the processing of PI?",
          questionCode: "Q0022-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-04",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-04-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Privacy Notice and/or Privacy Policy for your Company's offline activities that involve the processing of PI?",
          questionCode: "Q0022-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-05",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-05-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented internal Procedures for your Company activities that involve the processing of PI?",
          questionCode: "Q0022-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-06",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-06-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-06-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company prepared and implemented a data inventory of all PI data elements (in any form, whether Electronic or paper) and their locations across applications, systems, processes, media and data repositories?",
          questionCode: "Q0022-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-07",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-07-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-07-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Records Retention Policy and retention schedules specifically applicable to PI?",
          questionCode: "Q0022-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-08",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-08-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-08-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a specific Policy or Procedure for the storage of records and data containing PI?",
          questionCode: "Q0022-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-09",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-09-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-09-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Policies for Resources and Business Partners relating to storage outside of the business Sites of records containing PI?",
          questionCode: "Q0022-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-10",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-10-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-10-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company been the subject of an investigation, formal proceeding or settlement regarding or involving privacy, data protection, identity theft and/or data security by any U.S. or foreign Government, Body, regulator, law enforcement agency or self-regulatory organization (including, but not limited to, the U.S. Federal Trade Commission, Department of Health and Human Services, OCR, any state Attorney General or state consumer protection agency, any national/local health or pharmaceutical regulatory agency, any national Data Protection Authority, Commissioner or equivalent, the PCI Data Security Standards Council or a stock exchange)?",
          questionCode: "Q0022-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-11",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-11-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-11-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company evaluate in advance cross-border data flows / transfers for compliance with applicable national privacy or data protection related Laws?",
          questionCode: "Q0022-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-12",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-12-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-12-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company comply with the European Union Data Protection Directive (Directive 95/46/EC), if applicable?",
          questionCode: "Q0022-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-13-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company use Consent as the compliance method(s) for cross-border data transfers of PI outside of the EEA.",
          questionCode: "Q0022-13-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-13-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-02-01",
          dataType: "TX",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question:
            "Does your Company use Certification with the U.S. Department of Commerce Under the U.S.-EU and/or U.S.-Swiss Safe Harbor Accords as the compliance method(s) for cross-border data transfers of PI outside of the EEA.",
          questionCode: "Q0022-13-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-03",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-13-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-03-01",
          dataType: "TX",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question:
            "Does your Company use Model Contracts as the compliance method(s) for cross-border data transfers of PI outside of the EEA.",
          questionCode: "Q0022-13-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-04",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-13-04-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-04-01",
          dataType: "TX",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question:
            "Does your Company use Binding Corporate Rules as the compliance method(s) for cross-border data transfers of PI outside of the EEA.",
          questionCode: "Q0022-13-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-05",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-13-05-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-13-05-01",
          dataType: "TX",
          skipLogic: {
            conditions: [
              {
                source: "Q0022-13",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question:
            "Does your Company comply with EU Directive on Privacy and Electronic Communications (2002/58/EC), if applicable?",
          questionCode: "Q0022-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-14",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-14-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-14-01",
          dataType: "TX",
        },
        {
          question:
            "Are all required Data Protection Authority ('DPA') (or equivalent) registrations complete and up-to-date?",
          questionCode: "Q0022-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-15",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-15-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-15-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have in-country privacy or data protection officers or equivalent?",
          questionCode: "Q0022-16",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-16",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-16-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-16-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company monitor relevant privacy, security or data protection related Laws and keep your Policies, Procedures and practices updated/compliant?",
          questionCode: "Q0022-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-17",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-17-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-17-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure for inventorying PI data elements wherever collected, stored or Processed in Electronic and paper form?",
          questionCode: "Q0022-18",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-18",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-18-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-18-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented a Procedure for mapping data flow (including, but not limited to PI) throughout the data lifecycle?",
          questionCode: "Q0022-19",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-19",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-19-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-19-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Procedures to permit data subjects, in accordance with applicable Laws or Policies, to access and correct, amend or modify their PI, including Procedures to authenticate such individuals?",
          questionCode: "Q0022-20",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-20",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-20-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-20-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Procedures to timely correct, amend or modify PI upon requests by data subjects, in accordance with applicable Laws or Policies to the extent permissible?",
          questionCode: "Q0022-21",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-21",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-21-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-21-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Procedures to notify data subjects of the purposes for which their PI is being collected and Processed in accordance with applicable Laws or Policies?",
          questionCode: "Q0022-22",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-22",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-22-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-22-01",
          dataType: "TX",
        },
        {
          question:
            "Has your Company implemented Procedures requiring that PI is Processed only for the purposes for which it was collected and consent obtained, or as otherwise may be required by applicable Laws?",
          questionCode: "Q0022-23",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-23",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-23-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-23-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have in place written contracts with Business Partners that Process PI or otherwise have access to PI that include appropriate privacy, security and data protection-related provisions, including, but not limited to, compliance with applicable Laws and Policies, training, monitoring and audit rights, and prompt notification of any potential privacy or security-related incidents or breaches affecting PI, to ensure that all Business Partners and their agents that Process PI or otherwise have access to PI protect / safeguard it in a manner at least equivalent to the manner in which your Company protects / safeguards PI?",
          questionCode: "Q0022-24",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-24",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-24-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-24-01",
          dataType: "TX",
        },
        {
          question:
            "Are relevant changes to your Information Security Program (including, but not limited to changes for compliance with privacy, security and data protection related Laws) promptly communicated internally and to Business Partners who Process and/or otherwise have access to PI?",
          questionCode: "Q0022-25",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-25",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-25-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-25-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company rent to, sell to, or share or exchange with third-parties the PI of patients, health care professionals, consumers or the Resources of your clients?",
          questionCode: "Q0022-26",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-26",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-26-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-26-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company maintain internal databases of patient, health care professional, consumer or client information, of the Resources of your clients?",
          questionCode: "Q0022-27",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-27",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-27-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-27-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company ever append internal databases of patient, health care professional, consumer or client information, of the Resources of your clients with information obtained from other sources?",
          questionCode: "Q0022-28",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-28",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-28-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-28-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company attempt to ensure that marketing campaigns and/or any other activities such as those the Company may be performing for or on behalf of Pfizer which involve PI or in which PI is Processed, comply with applicable marketing, privacy, data protection and information security-related Laws and Policies?",
          questionCode: "Q0022-29",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-29",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-29-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-29-01",
          dataType: "TX",
        },
        {
          question:
            "Has an internal or external (independent third-party) audit of your Company's privacy and data protection related practices and/or activities ('Privacy Audit') been conducted within the last two years?",
          questionCode: "Q0022-30",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-30",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-30-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-30-01",
          dataType: "TX",
        },
        {
          question:
            "If a Privacy Audit was conducted, were any negative findings identified?",
          questionCode: "Q0022-31",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-31",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-31-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-31-01",
          dataType: "TX",
        },
        {
          question:
            "If any negative findings were identified, have they all been adequately remediated?",
          questionCode: "Q0022-32",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-32",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-32-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-32-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company conduct ongoing internal or external compliance monitoring of your Privacy Policies?",
          questionCode: "Q0022-33",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-33",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-33-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-33-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have a privacy or data protection governance charter or equivalent that includes privacy or data protection oversight committee or equivalent?",
          questionCode: "Q0022-34",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-34",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-34-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-34-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have a privacy or data protection governance charter or equivalent that includes a company privacy officer?",
          questionCode: "Q0022-35",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-35",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-35-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-35-01",
          dataType: "TX",
        },
        {
          question:
            "Are reports about your Company privacy, data protection and data security risks and controls provided to the Board of Directors or equivalent on a regular basis?",
          questionCode: "Q0022-36",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-36",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-36-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-36-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company participate in a privacy seal program such as TRUSTe or BBB?",
          questionCode: "Q0022-37",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-37",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "Y",
            },
            {
              text: "No",
              code: "N",
            },
            {
              text: "In progress",
              code: "IP",
            },
            {
              text: "N/A",
              code: "NA",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question: "Comments",
          questionCode: "Q0022-37-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-37-01",
          dataType: "TX",
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
