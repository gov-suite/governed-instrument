// Generated from medigy-quality-evaluation-facet.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  name: "Medigy Quality Evaluation Facet",
  items: [
    {
      question: "Quality Systems Supported",
      questionCodeSystem: "Custom",
      questionCode: "QSS",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "BCS SIGIST",
                "FDA",
                "IEEE",
                "ISO",
              ],
            },
          },
        },
      },
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "BCS SIGIST",
          code: "QSS1",
        },
        {
          text: "FDA",
          code: "QSS2",
        },
        {
          text: "IEEE",
          code: "QSS3",
        },
        {
          text: "ISO",
          code: "QSS4",
        },
      ],
    },
    {
      question: "IEEE",
      questionCodeSystem: "Custom",
      questionCode: "IEEE",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "IEEE 730 - Software quality assurance",
                "IEEE 829-2008 - IEEE Standard for Software and System Test Documentation",
                "IEEE 1012a-1998 - IEEE Standard for Software Verification and Validation",
                "IEEE 1028-2008 - IEEE Standard for Software Reviews and Audits",
                "IEEE Std 1061-1992 -Standard for Software Quality Metrics Methodology",
                "IEEE 1008 - A standard for unit testing",
                "1044-2009 - IEEE Standard Classification for Software Anomalies",
                "ISO 13485:2016  -Medical devices -- Quality management systems -- Requirements for regulatory purposes",
              ],
            },
          },
        },
      },
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "IEEE 730 - Software quality assurance",
          code: "IEEE1",
        },
        {
          text:
            "IEEE 829-2008 - IEEE Standard for Software and System Test Documentation",
          code: "IEEE2",
        },
        {
          text:
            "IEEE 1012a-1998 - IEEE Standard for Software Verification and Validation",
          code: "IEEE3",
        },
        {
          text:
            "IEEE 1028-2008 - IEEE Standard for Software Reviews and Audits",
          code: "IEEE4",
        },
        {
          text:
            'IEEE Std 1061-1992 -Standard for Software Quality Metrics Methodology"',
          code: "IEEE5",
        },
        {
          text: "IEEE 1008 - A standard for unit testing.",
          code: "IEEE6",
        },
        {
          text:
            "1044-2009 - IEEE Standard Classification for Software Anomalies",
          code: "IEEE7",
        },
        {
          text:
            "ISO 13485:2016  -Medical devices -- Quality management systems -- Requirements for regulatory purposes",
          code: "IEEE8",
        },
      ],
      skipLogic: {
        action: "show",
        logic: "ANY",
        conditions: [
          {
            source: "QSS",
            trigger: {
              code: "QSS3",
            },
          },
        ],
      },
    },
    {
      question: "ISO",
      questionCodeSystem: "Custom",
      questionCode: "ISO",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "ISO/IEC 27001 - Information security management systems",
                "ISO/IEC 9126 - Software engineering -- Product quality",
              ],
            },
          },
        },
      },
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "ISO/IEC 27001 - Information security management systems",
          code: "ISO1",
        },
        {
          text: "ISO/IEC 9126 - Software engineering -- Product quality",
          code: "ISO2",
        },
      ],
      skipLogic: {
        action: "show",
        logic: "ANY",
        conditions: [
          {
            source: "QSS",
            trigger: {
              code: "QSS4",
            },
          },
        ],
      },
    },
    {
      question: "FDA",
      questionCodeSystem: "Custom",
      questionCode: "FDA",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "Quality System Regulation (QSR)",
                "Other",
              ],
            },
          },
        },
      },
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
          text: "Quality System Regulation (QSR)",
          code: "FDA1",
        },
        {
          text: "Other",
          code: "FDA2",
          other: "Please Specify",
        },
      ],
      skipLogic: {
        action: "show",
        logic: "ANY",
        conditions: [
          {
            source: "QSS",
            trigger: {
              code: "QSS2",
            },
          },
        ],
      },
    },
    {
      question: "BCS",
      questionCodeSystem: "Custom",
      questionCode: "BCSS",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "BS7925-2 Standard for Software Component Testing",
                "Other",
              ],
            },
          },
        },
      },
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
          text: "BS7925-2 Standard for Software Component Testing",
          code: "BCSS1",
        },
        {
          text: "Other",
          code: "BCSS2",
          other: "Please Specify",
        },
      ],
      skipLogic: {
        action: "show",
        logic: "ANY",
        conditions: [
          {
            source: "QSS",
            trigger: {
              code: "QSS1",
            },
          },
        ],
      },
    },
    {
      question: "Quality Evaluation Supported",
      questionCodeSystem: "Custom",
      questionCode: "QES",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "Digital Healthcare Testing Algorithm",
                "Architecture Evaluation",
                "Design Safety Evaluation",
                "Interoperability Evaluation",
                "Other",
              ],
            },
          },
        },
      },
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "Digital Healthcare Testing Algorithm",
          code: "QES1",
        },
        {
          text: "Architecture Evaluation",
          code: "QES2",
        },
        {
          text: "Design Safety Evaluation",
          code: "QES3",
        },
        {
          text: "Interoperability Evaluation",
          code: "QES4",
        },
        {
          text: "Other",
          code: "QES5",
          other: "Please Specify",
        },
      ],
    },
    {
      question: "Quality Validation Supported",
      questionCodeSystem: "Custom",
      extensions: {
        qe3: {
          publication: {
            qe3_visualization: {
              type: "Select",
              options: [
                "Interoperability Testing",
                "Performance Testing",
                "Security Testing",
                "Compatibility Testing",
                "Other",
              ],
            },
          },
        },
      },
      questionCode: "QVS",
      questionCardinality: {
        min: 1,
        max: 1,
      },
      header: false,
      editable: "1",
      answerCardinality: {
        min: 0,
        max: "*",
      },
      dataType: "CWE",
      answers: [
        {
          text: "Interoperability Testing",
          code: "QVS1",
        },
        {
          text: "Performance Testing",
          code: "QVS2",
        },
        {
          text: "Security Testing",
          code: "QVS3",
        },
        {
          text: "Compatibility Testing",
          code: "QVS4",
        },
        {
          text: "Other",
          code: "QVS5",
          other: "Please Specify",
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
