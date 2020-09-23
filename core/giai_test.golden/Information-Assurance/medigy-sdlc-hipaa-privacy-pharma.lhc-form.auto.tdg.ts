// Generated from medigy-sdlc-hipaa-privacy-pharma.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-001",
  name: "Medigy SDLC HIPAA Privacy (Pharma)",
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
    {
      question: "Software Development Life Cycle (SDLC)",
      header: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: null,
      copyrightNotice: null,
      items: [
        {
          question:
            "Does your Company have a defined, written project lifecycle (e.g., the Pfizer Enterprise Life Cycle (ELC) or an alternative lifecycle) approach that is identified and consistently followed?",
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
          questionCode: "Q0022-01-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-01-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's project lifecycle approach identify that deliverables need to be defined and that approval by a manager or sponsor must take place at each milestone?",
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
          questionCode: "Q0022-02-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-02-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company's project lifecycle approach require a project plan (or equivalent) that outlines at least the schedule for critical milestone delivery?",
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
          questionCode: "Q0022-03-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0022-03-01",
          dataType: "TX",
        },
        {
          question:
            "Does your Company have Procedures for tracking project progress and status, including effective issue and risk monitoring?",
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
            "Does your Company have a documented Procedure to capture, review and approve application requirements?",
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
            "Does your company require a valid handwritten approval or electronic signature approval for the requirements for applications with a regulatory impact?",
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
            "Does your Company's project lifecycle approach provide for a written Design Document or equivalent?",
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
            "If your Company develops software code, does it use the most recent version of the software coding standards?",
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
            "Does someone else other than the programmer review the code for conformance to the coding standards (e.g., has your Company implemented a code review Procedure)?",
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
            "Has your Company implemented a consistent code management tool and code check-in Procedure to require that source code configuration items are managed throughout the product lifecycle?",
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
            "Is access to development, testing and production areas appropriately segregated within your Company?",
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
            "Does your Company's operational staff have access only to the production/test/staging areas under control based on their specific job functions/roles?",
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
      ],
    },
    {
      question:
        "Are applications and systems verified as fit for purpose using your Company's or other industry-standard methodology before release into the production environment?",
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
      questionCode: "Q0022-13-01",
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0022-13-01",
      dataType: "TX",
    },
    {
      question:
        "Is your Company's approach to testing formally documented and does the approach require the preparation and execution of test scripts?",
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
        "Are your Company's tests traceable to the requirement(s) they are designed to verify?",
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
        "Does your Company have a consistent approach for test failure resolution integrated into the test procedure?",
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
        "Does each test script or plan include predetermined acceptance criteria?",
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
        "Does your Company have an area that is separate from the production environment for development and testing?",
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
        "Does your Company clearly record and retain test script results?",
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
        "Does your Company require a valid handwritten or electronic signature approval for test script results from the tester?",
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
        "Does your Company have a Procedure that requires documented test scripts with evidence to verify that test objective(s) meet their technical and regulatory requirement(s)?",
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
        "Where automated testing tools are in use do these tools meet, at a minimum, the equivalent documented control standard required for manual testing?",
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
        "Is the system configuration information managed through a logical and defined procedure?",
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
        "Has your Company implemented a configuration management procedure to require that appropriate configuration information is created and captured each time there is a system change, system installation or system retirement?",
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
        "Does the configuration information include a description, physical location, data owner and platform and product information?",
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
        "Is the release of a new version or an update of a system or product controlled through a Procedure to require that appropriate pre-release testing is completed and approved?",
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
        "Are the technical and user documents and/or user training updated for a new version and made appropriately available?",
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
        "Does the release Procedure include documented verification and approval that all the necessary pre-release steps have been confirmed as complete?",
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
        "At the point of release, are all of the records related to the development required to accurately evidence the development lifecycle of the application (including code) retained?",
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
        "Does the sign-off/approval for the release procedure have a valid handwritten or electronic signature?",
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
        "Has your Company implemented a system retirement Procedure to require that data migration, retention and future data access requirements are met once the system is retired from active operation?",
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
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
