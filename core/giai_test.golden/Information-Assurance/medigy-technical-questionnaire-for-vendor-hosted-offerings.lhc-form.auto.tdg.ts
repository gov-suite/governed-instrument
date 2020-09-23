// Generated from medigy-technical-questionnaire-for-vendor-hosted-offerings.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "Medigy Technical Questionnaire for Vendor Hosted Offerings",
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
      question:
        "Information Assurance or Security Subject Matter Expert Contact Information (**All fields in this section are required**)",
      header: true,
      hideUnits: true,
      questionCode: "Q003",
      localQuestionCode: "Q003",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Name",
          questionCode: "Q003-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-01",
          dataType: "ST",
        },
        {
          question: "Title",
          questionCode: "Q003-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-02",
          dataType: "ST",
        },
        {
          question: "Email Address",
          questionCode: "Q003-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-05",
          dataType: "ST",
        },
        {
          question: "Company",
          questionCode: "Q003-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04",
          dataType: "ST",
        },
        {
          question: "Phone",
          questionCode: "Q003-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-06",
          dataType: "ST",
        },
      ],
    },
    {
      question:
        "Technical Requirements Subject Matter Expert Contact Information (**All fields in this section are required**)",
      header: true,
      hideUnits: true,
      questionCode: "Q004",
      localQuestionCode: "Q004",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Name",
          questionCode: "Q004-01",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-01",
          dataType: "ST",
        },
        {
          question: "Title",
          questionCode: "Q004-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-02",
          dataType: "ST",
        },
        {
          question: "Email Address",
          questionCode: "Q004-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-05",
          dataType: "ST",
        },
        {
          question: "Company",
          questionCode: "Q004-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-04",
          dataType: "ST",
        },
        {
          question: "Phone",
          questionCode: "Q004-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-06",
          dataType: "ST",
        },
      ],
    },
    {
      question: "1.0 - Solution Overview",
      header: true,
      hideUnits: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions:
        "This document should be completed based on how the solution will be implemented for MedStar specifically.",
      copyrightNotice: null,
      items: [
        {
          question:
            "Attach a logical architectural document of the application environment and application flow?",
          hideUnits: true,
          questionCode: "Q005-01",
          localQuestionCode: "Q005-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "N/A: Vendor documentation is not available",
              code: "NA",
            },
            {
              text: "Vendor Documentation Provided (Details defined below)",
              code: "Y",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Add Document",
              questionCode: "Q005-Document",
              localQuestionCode: "Q005-Document",
              header: true,
              hideUnits: true,
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              questionCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q005-01",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              items: [
                {
                  question: "Document Name",
                  hideUnits: true,
                  questionCode: "Q005-01-01",
                  localQuestionCode: "Q005-01-01",
                  units: null,
                  dataType: "CNE",
                  answers: null,
                  questionCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions:
                    "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                  copyrightNotice: null,
                },
                {
                  question: "Page Number",
                  hideUnits: true,
                  questionCode: "Q005-01-02",
                  localQuestionCode: "Q005-01-02",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  copyrightNotice: null,
                },
              ],
            },
          ],
        },
        {
          question: "Are there any specialized devices used with the Solution?",
          questionCode: "Q005-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-02",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "Specialized Devices Used",
              hideUnits: true,
              questionCode: "Q005-01-01",
              localQuestionCode: "Q005-01-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q005-02",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
              questionCardinality: {
                min: 1,
                max: "*",
              },
            },
          ],
        },
        {
          question: "Solution Integration",
          header: true,
          hideUnits: true,
          questionCode: "Q005-SH",
          localQuestionCode: "Q005-SH",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question:
                "Does this solution require integration with another existing MedStar system?",
              header: true,
              hideUnits: true,
              questionCode: "Q005-SH1",
              localQuestionCode: "Q005-SH1",
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Is an interface required?",
          questionCode: "Q005-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-03",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "Specify interface",
              hideUnits: true,
              questionCode: "Q005-03-01",
              localQuestionCode: "Q005-03-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Uni-directional",
                  code: "Uni",
                },
                {
                  text: "Bi-directional",
                  code: "Bi",
                },
                {
                  text: "New/Enhancement",
                  code: "New",
                },
              ],
              skipLogic: {
                conditions: [
                  {
                    source: "Q005-03",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "What information will be included in the interface?",
          questionCode: "Q005-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-04",
          dataType: "CNE",
          answers: [
            {
              text: "Patient Demographics",
              code: "Patient",
            },
            {
              text: "Text Clinical Results",
              code: "Text",
            },
            {
              text: "Charges",
              code: "Charges",
            },
            {
              text: "Orders",
              code: "Orders",
            },
            {
              text: "Images",
              code: "Images",
            },
            {
              text: "Employee Demographics",
              code: "Employee Demographics",
            },
            {
              text: "HR/Payroll",
              code: "HR",
            },
            {
              text: "Employee Benefits",
              code: "Employee",
            },
            {
              text: "Claims/Payments",
              code: "Claims",
            },
            {
              text: "Eligibility",
              code: "Eligibility",
            },
            {
              text: "Queries and Response (EMPI)",
              code: "Queries",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Specify other",
              hideUnits: true,
              questionCode: "Q005-04-01",
              localQuestionCode: "Q005-04-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q005-04",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Which existing MedStar application(s) will this system interface with?",
          questionCode: "Q005-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-05",
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: "*",
          },
          answers: null,
        },
      ],
    },
    {
      question: "2.0 - Access and Authentication",
      header: true,
      hideUnits: true,
      questionCode: "Q006",
      localQuestionCode: "Q006",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "How do users connect to the application?",
          hideUnits: true,
          questionCode: "Q006-01",
          localQuestionCode: "Q006-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text:
                "Publicly available via standard internet connection with encrypted transmissions",
              code: "Publicly",
            },
            {
              text:
                "Dedicated Circuit to hosting facility from MedStar network (WAN link required)",
              code: "Dedicated",
            },
            {
              text:
                "Site-to-site VPN from MedStar network to hosting facility.",
              code: "Site",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Other",
              hideUnits: true,
              questionCode: "Q006-01-01",
              localQuestionCode: "Q006-01-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-01",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Are any DNS entries required?",
          questionCode: "Q006-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-02",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "DNS entries",
              hideUnits: true,
              questionCode: "Q006-02-01",
              localQuestionCode: "Q006-02-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-02",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "How do users accessing the Solution, authenticate?",
          questionCode: "Q006-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-03",
          dataType: "CNE",
          answers: [
            {
              text:
                "Application integrated user ID and password (Application Level)",
              code: "Application",
            },
            {
              text:
                "MedStar Active Directory Credentials (Federation, SAML, Referral, ...)",
              code: "MedStar",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "MedStar Active Directory Credentials",
              hideUnits: true,
              questionCode: "Q006-03-01",
              localQuestionCode: "Q006-03-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-03",
                    trigger: {
                      code: "MedStar",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Describe Authentication",
              hideUnits: true,
              questionCode: "Q006-03-02",
              localQuestionCode: "Q006-03-02",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-03",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Does the solution permit any authentication through internal application accounts or logins (possibly in addition to AD authentication)?",
          questionCode: "Q006-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-04",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q006-04-01",
              localQuestionCode: "Q006-04-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-04",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "If authentication is permitted via any mechanism other than or in addition to AD, is it possible to export a list of all accounts or logins, together with identifying information such as first name, last name, login id, or other numerical or non-numerical identifiers associated with the account to an industry standard format or protocol, such as CSV, XML, or LDAP? (This requirement is to permit audit and recertification of solution accounts.)",
              questionCode: "Q006-05",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "Q006-05",
              dataType: "CNE",
              skipLogic: {
                conditions: [
                  {
                    source: "Q006-04",
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
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              items: [
                {
                  question:
                    "Specify how accounts in the Solution should be audited, or why this is not required",
                  hideUnits: true,
                  questionCode: "Q006-05-01",
                  localQuestionCode: "Q006-05-01",
                  units: null,
                  dataType: "TX",
                  answers: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q006-05",
                        trigger: {
                          code: "Y",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "3.0 - Security",
      header: true,
      hideUnits: true,
      questionCode: "Q007",
      localQuestionCode: "Q007",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Has the vendor signed the standard MedStar Business Associate Agreement (BAA)?",
          hideUnits: true,
          questionCode: "Q007-01",
          localQuestionCode: "Q007-01",
          units: null,
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Will Medstar data coexist with other customers data on servers, databases, or other infrastructure?",
          questionCode: "Q007-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-02",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-02-01",
              localQuestionCode: "Q007-02-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-02",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Have any security or compliance certifications been achieved?",
          questionCode: "Q007-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-03",
          dataType: "CNE",
          answers: [
            {
              text: "PCI DSS",
              code: "PCI",
            },
            {
              text: "SSAE-16 SOC 1",
              code: "SOC1",
            },
            {
              text: "SSAE-16 SOC 2",
              code: "SOC2",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-03-01",
              localQuestionCode: "Q007-03-01",
              units: null,
              dataType: "ST",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-03",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "How does support personnel access the product, service, or application to provide support or make system changes ?",
          questionCode: "Q007-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-04",
          dataType: "CNE",
          answers: [
            {
              text: "RDP over Business to Business VPN",
              code: "RDP",
            },
            {
              text: "WEBEX",
              code: "WEBEX",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-04-01",
              localQuestionCode: "Q007-04-01",
              units: null,
              dataType: "ST",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-04",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Which of the following applies to the end user access to the Solution?",
          questionCode: "Q007-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-05",
          dataType: "CNE",
          answers: [
            {
              text: "Encrypted direct access over the Internet",
              code: "Encrypted",
            },
            {
              text:
                "Site to Site VPN (all access from MedStar to be routed through the Site to Site VPN)",
              code: "Site",
            },
            {
              text:
                "Published via the Internet with industry accepted two-factor authentication",
              code: "Published",
            },
            {
              text: "Locally connected to customer enterprise network.",
              code: "Locally",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question:
            "Which of the following applies to the Solution's standard security system hardening used on the OS?",
          questionCode: "Q007-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-06",
          dataType: "CNE",
          answers: [
            {
              text: "Configure and manage user privileges",
              code: "Configure",
            },
            {
              text: "Remove unused user accounts",
              code: "Remove",
            },
            {
              text: "Close unused network ports",
              code: "Close",
            },
            {
              text: "Password complexity and policies",
              code: "Password",
            },
            {
              text: "Remove unneeded services",
              code: "Remove unneeded",
            },
            {
              text: "Patch all known vulnerabilities",
              code: "Patch",
            },
            {
              text: "Least privileged administration model",
              code: "Least",
            },
            {
              text: "Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-06-01",
              localQuestionCode: "Q007-06-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-06",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Has a risk assessment of the product/service been completed?",
          questionCode: "Q007-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-07",
          dataType: "CNE",
          answers: [
            {
              text: "No",
              code: "Configure",
            },
            {
              text: "Yes, PCI DSS",
              code: "Yes, PCI DSS",
            },
            {
              text: "Yes, SSAE-16 SOC 1",
              code: "Yes, SSAE-16 SOC 1",
            },
            {
              text: "Yes, SSAE-16 SOC 2",
              code: "Yes, SSAE-16 SOC 2",
            },
            {
              text: "Yes, HIPPA/HITECH",
              code: "Yes, HIPPA/HITECH",
            },
            {
              text: "Yes, Other",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-07-01",
              localQuestionCode: "Q007-07-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-07",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Who completed the risk assessment in the question above?",
          questionCode: "Q007-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-08",
          dataType: "CNE",
          answers: [
            {
              text: "Self Assessment",
              code: "Self Assessment",
            },
            {
              text: "Not Applicable (no assessment has been completed)",
              code: "Not Applicable (no assessment has been completed)",
            },
            {
              text: "Third Party",
              code: "Other",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-08-01",
              localQuestionCode: "Q007-08-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-08",
                    trigger: {
                      code: "Other",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Which of the following applies to the password standards?",
          questionCode: "Q007-09",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-09",
          dataType: "CNE",
          answers: [
            {
              text: "Minimum Password Length (8 characters)",
              code: "Minimum Password Length (8 characters)",
            },
            {
              text: "Password Expiration (90 days)",
              code: "Password Expiration (90 days)",
            },
            {
              text: "Maximum Login Attempts (10 incorrect passwords)",
              code: "Maximum Login Attempts (10 incorrect passwords)",
            },
            {
              text: "Syntax(3 out of 4 of the following)",
              code: "Syntax",
            },
            {
              text: "Password History (maintained where possible)",
              code: "Password History (maintained where possible)",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          items: [
            {
              question: "Syntax(3 out of 4 of the following)",
              hideUnits: false,
              noEmptyValue: true,
              questionCode: "Q007-09-01",
              localQuestionCode: "Q007-09-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Upper case alphabetic",
                  code: "Upper case alphabetic",
                },
                {
                  text: "Lower case alphabetic",
                  code: "Lower case alphabetic",
                },
                {
                  text: "Numeric",
                  code: "Numeric",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-09",
                    trigger: {
                      code: "Syntax",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Are there any concerns and or limitations regarding the use of anti-virus software or standard patching procedures?",
          questionCode: "Q007-10",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-10",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Does the Solution store any confidential information? (i.e. PHI, or PCI Merchant data such as Patient Name, SSN, Credit Card Information, etc)",
          questionCode: "Q007-11",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-11",
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
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
        },
        {
          question:
            "Which of the following describes the current HIPAA/HITECH governance?",
          questionCode: "Q007-12",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-12",
          dataType: "CNE",
          answers: [
            {
              text:
                "HIPAA/HITECH policies, procedures are clearly defined and documented",
              code: "1",
            },
            {
              text:
                "Formal staff training on applicable policies and procedures are conducted on a routine basis",
              code: "2",
            },
            {
              text:
                "HR employee sanctions are in place for violations of HIPAA/HITECH non-compliance up to and including termination.",
              code: "3",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          items: [
            {
              question: "Syntax(3 out of 4 of the following)",
              hideUnits: true,
              questionCode: "Q007-12-01",
              localQuestionCode: "Q007-12-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Part of New Hire Training",
                  code: "1",
                },
                {
                  text: "Annually",
                  code: "2",
                },
                {
                  text: "Other",
                  code: "3",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-12",
                    trigger: {
                      code: "3",
                    },
                  },
                ],
                action: "show",
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q007-12-01-01",
                  localQuestionCode: "Q007-12-01-01",
                  units: null,
                  dataType: "TX",
                  answers: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q007-12-01",
                        trigger: {
                          code: "3",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
              ],
            },
          ],
        },
        {
          question:
            "Which of the following describes any sanctions for noncompliance to HIPAA/HITECH requirements?",
          questionCode: "Q007-13",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-13",
          dataType: "CNE",
          answers: [
            {
              text: "There have never been any sanctions for noncompliance",
              code: "1",
            },
            {
              text:
                "There have been past sanctions for noncompliance which have been successfully remediated and resolved",
              code: "2",
            },
            {
              text:
                "There are current sanctions for noncompliance which are currently being remediated",
              code: "3",
            },
            {
              text: "Other",
              code: "4",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-13-01",
              localQuestionCode: "Q007-13-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-13",
                    trigger: {
                      code: "4",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question: "Is there a HIPAA/HITECH remediation plan?",
          questionCode: "Q007-14",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-14",
          dataType: "CNE",
          answers: [
            {
              text: "No remediation plan currently exists",
              code: "1",
            },
            {
              text:
                "The remediation plan includes actionable tasks with associated timeframes and is reviewed monthly",
              code: "2",
            },
            {
              text:
                "The remediation plan includes actionable tasks with associated timeframes and is reviewed quarterly",
              code: "3",
            },
            {
              text:
                "The remediation plan includes actionable tasks with associated timeframes and is reviewed annually",
              code: "4",
            },
            {
              text: "Other",
              code: "5",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q007-14-01",
              localQuestionCode: "Q007-14-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-14",
                    trigger: {
                      code: "5",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "Which of the following application security logs can your software provide?",
          questionCode: "Q007-15",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-15",
          dataType: "CNE",
          answers: [
            {
              text: "Access Reports",
              code: "1",
            },
            {
              text: "Failed Logins",
              code: "3",
            },
            {
              text: "Other Security Events",
              code: "4",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
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
            "Are the logs mentioned in the question above available on demand?",
          questionCode: "Q007-16",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-16",
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "1",
            },
            {
              text: "No",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          items: [
            {
              question: "Please specify how MedStar can obtain these logs",
              hideUnits: true,
              questionCode: "Q007-16-01",
              localQuestionCode: "Q007-16-01",
              units: null,
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-16",
                    trigger: {
                      code: "2",
                    },
                  },
                ],
                action: "show",
              },
              questionCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
        {
          question:
            "What type of logging does the application product or service provide?",
          questionCode: "Q007-17",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-17",
          dataType: "CNE",
          answers: [
            {
              text: "Security logging has not been implemented",
              code: "1",
            },
            {
              text:
                "Security logging has been implemented but archives are not maintained",
              code: "2",
            },
            {
              text:
                "Security logging has been implemented and achieves are maintained",
              code: "3",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
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
            "Provide a logical architectural document of the application environment, and a detailed logical application flow.",
          questionCode: "Q007-18",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-18",
          dataType: "CNE",
          answers: [
            {
              text: "N/A: Vendor documentation isn’t available",
              code: "1",
            },
            {
              text: "Vendor Documentation Provided",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          skipLogic: {
            conditions: [
              {
                source: "Q007-11",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          items: [
            {
              question: "Add Document",
              questionCode: "Q007-Document",
              localQuestionCode: "Q007-Document",
              header: true,
              hideUnits: true,
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              questionCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q007-18",
                    trigger: {
                      code: "2",
                    },
                  },
                ],
                action: "show",
              },
              items: [
                {
                  question: "Document Name",
                  hideUnits: true,
                  questionCode: "Q007-18-01",
                  localQuestionCode: "Q007-18-01",
                  units: null,
                  dataType: "CNE",
                  answers: null,
                  questionCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions:
                    "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                  copyrightNotice: null,
                },
                {
                  question: "Page Number",
                  hideUnits: true,
                  questionCode: "Q007-18-02",
                  localQuestionCode: "Q007-18-02",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  copyrightNotice: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "4.0 - PKI and Certificate Requirements",
      header: true,
      hideUnits: true,
      questionCode: "Q008",
      localQuestionCode: "Q008",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Is there any PKI or other certificates required for MedStar hosted server, appliance, communication, application or interface that is dedicated to the Solution?",
          hideUnits: true,
          questionCode: "Q008-01",
          localQuestionCode: "Q008-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "No",
              code: "N",
            },
            {
              text: "Yes",
              code: "Y",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Please check all required PKI certificates needed?",
              hideUnits: true,
              questionCode: "Q008-01-01",
              localQuestionCode: "Q008-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "One-year PKI SSL browser certificate",
                  code: "1",
                },
                {
                  text: "One-year PKI S/MIME browser certificate",
                  code: "2",
                },
                {
                  text: "One-year PKI generated key certificate",
                  code: "3",
                },
                {
                  text:
                    "Two-year PKI browser certificate for authenticating to z/OS",
                  code: "4",
                },
                {
                  text:
                    "Two-year PKI Authenticode - code signing server certificate",
                  code: "5",
                },
                {
                  text: "Two-year PKI Windows logon certificate",
                  code: "6",
                },
                {
                  text: "Five-year PKI SSL server certificate",
                  code: "7",
                },
                {
                  text: "Five-year PKI IPSEC server (firewall) certificate",
                  code: "8",
                },
                {
                  text: "Five-year PKI intermediate CA server certificate",
                  code: "9",
                },
                {
                  text: "Five-year SCEP certificate",
                  code: "10",
                },
                {
                  text:
                    "n-year PKI browser certificate for extensions demonstration",
                  code: "11",
                },
                {
                  text: "One-year SAF browser certificate",
                  code: "12",
                },
                {
                  text: "One-year SAF server certificate",
                  code: "13",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q008-01",
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
                "Specify all PKI or certificate requirements needed if not listed above.",
              questionCode: "Q008-02",
              hideUnits: false,
              noEmptyValue: true,
              localQuestionCode: "Q008-02",
              dataType: "TX",
              answers: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q008-01",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
            },
          ],
        },
      ],
    },
    {
      question: "5.0 - Networking and Voice",
      header: true,
      hideUnits: true,
      questionCode: "Q009",
      localQuestionCode: "Q009",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "MedStar prefers not to allow vendor provided and supported routers and switches on the MedStar network. MedStar systems operate in a routed LAN/WAN environment and new Solutions are required to be fully TCP/IP compliant and routable.",
          header: true,
          hideUnits: true,
          questionCode: "Q009-01",
          localQuestionCode: "Q009-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "5.1 - Wired",
              header: true,
              hideUnits: true,
              questionCode: "Q009-01-01",
              localQuestionCode: "Q009-01-01",
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "What are the minimum bandwidth requirements per Servers?",
                  hideUnits: true,
                  questionCode: "Q009-01-01-01",
                  localQuestionCode: "Q009-01-01-01",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Equal to or less than 1 Mb per second",
                      code: "1",
                    },
                    {
                      text: "1 to 10 Mb per second",
                      code: "2",
                    },
                    {
                      text: "10 - 100 Mb per second",
                      code: "3",
                    },
                    {
                      text: "1 Gb per second or greater",
                      code: "4",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
                {
                  question:
                    "What are the minimum bandwidth requirements per Client Device?",
                  hideUnits: true,
                  questionCode: "Q009-01-01-02",
                  localQuestionCode: "Q009-01-01-02",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Equal to or less than 100 Kb per second",
                      code: "1",
                    },
                    {
                      text: "100 to 500 Kb per second",
                      code: "2",
                    },
                    {
                      text: "500 to 1 Mb per second",
                      code: "3",
                    },
                    {
                      text: "1 - 10 Mb per second",
                      code: "4",
                    },
                    {
                      text: "Greater than 10 Mb per second",
                      code: "5",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
                {
                  question:
                    "Does the Solution require more than a single static IP Addresses assignment per server?",
                  hideUnits: true,
                  questionCode: "Q009-01-01-03",
                  localQuestionCode: "Q009-01-01-03",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "No",
                      code: "1",
                    },
                    {
                      text: "Yes",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Describe your requirements",
                      questionCode: "Q009-01-01-03-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q009-01-01-03-01",
                      dataType: "TX",
                      answers: null,
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q009-01-01-03",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "Does the Solution require static IP Addresses assigned to client devices?",
                  hideUnits: true,
                  questionCode: "Q009-01-01-04",
                  localQuestionCode: "Q009-01-01-04",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "No",
                      code: "1",
                    },
                    {
                      text: "Yes",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Describe your requirements",
                      questionCode: "Q009-01-01-04-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q009-01-01-04-01",
                      dataType: "TX",
                      answers: null,
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q009-01-01-04",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
              ],
            },
            {
              question: "5.2 - Wireless",
              header: true,
              hideUnits: true,
              questionCode: "Q0010-01-01",
              localQuestionCode: "Q0010-01-01",
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Does the Solution have a wireless component?",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-01",
                  localQuestionCode: "Q0010-01-01-01",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Yes",
                      code: "1",
                    },
                    {
                      text: "No",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
                {
                  question:
                    "Will the Solution be connected to the MedStar enterprise wireless network?",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-02",
                  localQuestionCode: "Q0010-01-01-02",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Yes",
                      code: "1",
                    },
                    {
                      text: "No",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0010-01-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Please specify",
                      questionCode: "Q0010-01-01-02-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q0010-01-01-02-01",
                      dataType: "TX",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0010-01-01-02",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "Which of the following standard authentication method does the Solution support?",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-03",
                  localQuestionCode: "Q0010-01-01-03",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "User Name and Password/Active Directory",
                      code: "1",
                    },
                    {
                      text: "PEAP – MS CHAP",
                      code: "2",
                    },
                    {
                      text: "EAP – TLS (Digital Certificates)",
                      code: "3",
                    },
                    {
                      text: "Machine Authentication",
                      code: "4",
                    },
                    {
                      text: "Other",
                      code: "5",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0010-01-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Please specify",
                      questionCode: "Q0010-01-01-03-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q0010-01-01-03-01",
                      dataType: "TX",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0010-01-01-03",
                            trigger: {
                              code: "5",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "The MedStar Wireless Environment is built to the Cisco's best practices for wireless, data, voice and video. Are there concerns about the Solution's compatibility with these wireless standards?",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-04",
                  localQuestionCode: "Q0010-01-01-04",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "No",
                      code: "1",
                    },
                    {
                      text: "Yes",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0010-01-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Please specify",
                      questionCode: "Q0010-01-01-04-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q0010-01-01-04-01",
                      dataType: "TX",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0010-01-01-04",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "Are there any other considerations or concerns related to Networking that should be taken into consideration?",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-05",
                  localQuestionCode: "Q0010-01-01-05",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "No",
                      code: "1",
                    },
                    {
                      text: "Yes",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0010-01-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Please specify",
                      questionCode: "Q0010-01-01-05-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q0010-01-01-05-01",
                      dataType: "TX",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0010-01-01-05",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "The following documentation has been provided and can be referenced for more information related to Networking.",
                  hideUnits: true,
                  questionCode: "Q0010-01-01-06",
                  localQuestionCode: "Q0010-01-01-06",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "N/A: Vendor documentation is not available",
                      code: "1",
                    },
                    {
                      text: "Vendor Documentation Provided",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: "*",
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0010-01-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Add Document",
                      questionCode: "Q0010-Document",
                      localQuestionCode: "Q0010-Document",
                      header: true,
                      hideUnits: true,
                      units: null,
                      codingInstructions: "",
                      copyrightNotice: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0010-01-01-06",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                      items: [
                        {
                          question: "Document Name",
                          hideUnits: true,
                          questionCode: "Q0010-01-01-06-01",
                          localQuestionCode: "Q0010-01-01-06-01",
                          units: null,
                          dataType: "CNE",
                          answers: null,
                          questionCardinality: {
                            min: 1,
                            max: 1,
                          },
                          codingInstructions:
                            "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                          copyrightNotice: null,
                        },
                        {
                          question: "Page Number",
                          hideUnits: true,
                          questionCode: "Q0010-01-01-06-02",
                          localQuestionCode: "Q0010-01-01-06-02",
                          units: null,
                          dataType: "ST",
                          codingInstructions: "",
                          copyrightNotice: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              question: "5.3 - Voice",
              header: true,
              hideUnits: true,
              questionCode: "Q0011-01-01",
              localQuestionCode: "Q0011-01-01",
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question:
                    "Does the Solution involve any phone system integration?",
                  hideUnits: true,
                  questionCode: "Q0011-01-01-01",
                  localQuestionCode: "Q0011-01-01-01",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Yes",
                      code: "1",
                    },
                    {
                      text: "No",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
                {
                  question: "Does the Solution involve any video integration?",
                  hideUnits: true,
                  questionCode: "Q0011-01-01-02",
                  localQuestionCode: "Q0011-01-01-02",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Yes",
                      code: "1",
                    },
                    {
                      text: "No",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                },
                {
                  question:
                    "Are there any other considerations or concerns related to Phone System/Voice Integration that should be taken into consideration?",
                  hideUnits: true,
                  questionCode: "Q0011-01-01-03",
                  localQuestionCode: "Q0011-01-01-03",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "Yes",
                      code: "1",
                    },
                    {
                      text: "No",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Please specify",
                      questionCode: "Q0011-01-01-03-01",
                      hideUnits: false,
                      noEmptyValue: true,
                      localQuestionCode: "Q0011-01-01-03-01",
                      dataType: "TX",
                      answers: null,
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0011-01-01-03",
                            trigger: {
                              code: "1",
                            },
                          },
                        ],
                        action: "show",
                      },
                    },
                  ],
                },
                {
                  question:
                    "The following documentation has been provided and can be referenced for more information related to Phone System/Voice Integration.",
                  hideUnits: true,
                  questionCode: "Q0011-01-01-06",
                  localQuestionCode: "Q0011-01-01-06",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: "N/A: Vendor documentation is not available",
                      code: "1",
                    },
                    {
                      text: "Vendor Documentation Provided",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Add Document",
                      questionCode: "Q0011-Document",
                      localQuestionCode: "Q0011-Document",
                      header: true,
                      hideUnits: true,
                      units: null,
                      codingInstructions: "",
                      copyrightNotice: null,
                      questionCardinality: {
                        min: 1,
                        max: "*",
                      },
                      skipLogic: {
                        conditions: [
                          {
                            source: "Q0011-01-01-06",
                            trigger: {
                              code: "2",
                            },
                          },
                        ],
                        action: "show",
                      },
                      items: [
                        {
                          question: "Document Name",
                          hideUnits: true,
                          questionCode: "Q0011-01-01-06-01",
                          localQuestionCode: "Q0011-01-01-06-01",
                          units: null,
                          dataType: "CNE",
                          answers: null,
                          questionCardinality: {
                            min: 1,
                            max: 1,
                          },
                          codingInstructions:
                            "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                          copyrightNotice: null,
                        },
                        {
                          question: "Page Number",
                          hideUnits: true,
                          questionCode: "Q0011-01-01-06-02",
                          localQuestionCode: "Q0011-01-01-06-02",
                          units: null,
                          dataType: "ST",
                          codingInstructions: "",
                          copyrightNotice: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "6.0 - Workstation",
      header: true,
      hideUnits: true,
      questionCode: "Q0012-01-01",
      localQuestionCode: "Q0012-01-01",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "To ensure supportability of the environment, all workstations are subject to hardware and software standards. The following section summarizes these standards along with the means by which MedStar maintains them (e.g. software distribution, Local Admin access, etc...). Vendors are responsible for providing answers and information to assess whether or not the proposed Solution can be installed and maintained within MedStar's defined standards. Areas of focus include Workstation Hardware, Client Software, Data Access and Connectivity, Client Software Installation and Execution and Client Peripherals. In those cases where a Vendor's Solution cannot effectively operate within MedStar's standards, every effort should be made to provide complete information detailing the additional requirements.",
          header: true,
          hideUnits: true,
          questionCode: "Q0012-01-01-01",
          localQuestionCode: "Q0012-01-01-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "6.1 - Endpoint (Workstation) Hardware",
              header: true,
              hideUnits: true,
              questionCode: "Q0012-01-02",
              localQuestionCode: "Q0012-01-02",
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Desktop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0012-01-02-01",
                  localQuestionCode: "Q0012-01-02-01",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-01",
                      localQuestionCode: "Q0012-01-02-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Intel Core 2 Duo E8400",
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-02",
                      localQuestionCode: "Q0012-01-02-01-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "2GB RAM",
                    },
                    {
                      question: "Hard drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-03",
                      localQuestionCode: "Q0012-01-02-01-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "160 GB",
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-04",
                      localQuestionCode: "Q0012-01-02-01-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "17''",
                    },
                    {
                      question: "Optical Drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-05",
                      localQuestionCode: "Q0012-01-02-01-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "DVD/ CDRW Combo Drive",
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-06",
                      localQuestionCode: "Q0012-01-02-01-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "1 half height PCIe x16, 1 half height PCIe x1",
                    },
                    {
                      question: "Graphics",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-01-07",
                      localQuestionCode: "Q0012-01-02-01-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "On Board Intel Graphics",
                    },
                  ],
                },
                {
                  question: "Standard Laptop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0012-01-02-02",
                  localQuestionCode: "Q0012-01-02-02",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-01",
                      localQuestionCode: "Q0012-01-02-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Intel Core 2 Duo T9400",
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-02",
                      localQuestionCode: "Q0012-01-02-02-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "2GB RAM",
                    },
                    {
                      question: "Hard drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-03",
                      localQuestionCode: "Q0012-01-02-02-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "160 GB",
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-04",
                      localQuestionCode: "Q0012-01-02-02-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "15.4''",
                    },
                    {
                      question: "Optical Drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-05",
                      localQuestionCode: "Q0012-01-02-02-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "DVD/ CDRW Combo Drive",
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-06",
                      localQuestionCode: "Q0012-01-02-02-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "N/A",
                    },
                    {
                      question: "Graphics",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-02-07",
                      localQuestionCode: "Q0012-01-02-02-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "On Board Intel Graphics",
                    },
                  ],
                },
                {
                  question: "Light Weight Laptop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0012-01-02-03",
                  localQuestionCode: "Q0012-01-02-03",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-01",
                      localQuestionCode: "Q0012-01-02-03-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Intel Core 2 Duo T9400",
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-02",
                      localQuestionCode: "Q0012-01-02-03-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "2GB RAM",
                    },
                    {
                      question: "Hard drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-03",
                      localQuestionCode: "Q0012-01-02-03-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "160 GB",
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-04",
                      localQuestionCode: "Q0012-01-02-03-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "12''",
                    },
                    {
                      question: "Optical Drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-05",
                      localQuestionCode: "Q0012-01-02-03-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "No Drive",
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-06",
                      localQuestionCode: "Q0012-01-02-03-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "N/A",
                    },
                    {
                      question: "Graphics",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-03-07",
                      localQuestionCode: "Q0012-01-02-03-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "On Board Intel Graphics",
                    },
                  ],
                },
                {
                  question: "Rugged Laptop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0012-01-02-04",
                  localQuestionCode: "Q0012-01-02-04",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-01",
                      localQuestionCode: "Q0012-01-02-04-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Intel Core 2",
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-02",
                      localQuestionCode: "Q0012-01-02-04-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "2GB RAM",
                    },
                    {
                      question: "Hard drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-03",
                      localQuestionCode: "Q0012-01-02-04-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "160 GB",
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-04",
                      localQuestionCode: "Q0012-01-02-04-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "12''",
                    },
                    {
                      question: "Optical Drive",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-05",
                      localQuestionCode: "Q0012-01-02-04-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "No Drive",
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-06",
                      localQuestionCode: "Q0012-01-02-04-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "N/A",
                    },
                    {
                      question: "Graphics",
                      hideUnits: true,
                      questionCode: "Q0012-01-02-04-07",
                      localQuestionCode: "Q0012-01-02-04-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "On Board Intel Graphics",
                    },
                  ],
                },
              ],
            },
            {
              question:
                "Do the above MedStar device hardware standards satisfy the minimum specifications for running the Application?",
              hideUnits: true,
              questionCode: "Q0013-01",
              localQuestionCode: "Q0013-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Specify additional requirements for Desktop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0013-01-02",
                  localQuestionCode: "Q0013-01-02",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0013-01",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01",
                      localQuestionCode: "Q0013-01-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-02",
                      localQuestionCode: "Q0013-01-02-01-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Hard drive",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-03",
                      localQuestionCode: "Q0013-01-02-01-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-04",
                      localQuestionCode: "Q0013-01-02-01-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "DVD",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-05",
                      localQuestionCode: "Q0013-01-02-01-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-06",
                      localQuestionCode: "Q0013-01-02-01-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Standard Resolution",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-07",
                      localQuestionCode: "Q0013-01-02-01-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Other",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-01-08",
                      localQuestionCode: "Q0013-01-02-01-08",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
                {
                  question: "Specify additional requirements for Laptop",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0013-01-02-04",
                  localQuestionCode: "Q0013-01-02-04",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0013-01",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Processor",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-01",
                      localQuestionCode: "Q0013-01-02-04-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Memory",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-02",
                      localQuestionCode: "Q0013-01-02-04-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "DVD",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-03",
                      localQuestionCode: "Q0013-01-02-04-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Monitor/Screen",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-04",
                      localQuestionCode: "Q0013-01-02-04-04",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Optical Drive",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-05",
                      localQuestionCode: "Q0013-01-02-04-05",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Expansion Slots",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-06",
                      localQuestionCode: "Q0013-01-02-04-06",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Standard Resolution",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-07",
                      localQuestionCode: "Q0013-01-02-04-07",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Other",
                      hideUnits: true,
                      questionCode: "Q0013-01-02-04-08",
                      localQuestionCode: "Q0013-01-02-04-08",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          question: "6.2 - Client Software",
          header: true,
          hideUnits: true,
          questionCode: "Q0014-01",
          localQuestionCode: "Q0014-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question:
                "Does the Solution require any additional third party vendor software other than what's included in the workstation software base as indicated? Office 2007 (Word, Excel, PowerPoint, Outlook),Adobe Flash Player 11.2.202.233, Sun Java 1.6 update 12, Internet Explorer 7, Adobe Acrobat Reader 9, Symantec End Point 11 Antivirus Protection, Microsoft Silverlight, CITRIX Receiver v 3.0",
              hideUnits: true,
              questionCode: "Q0014-01-01",
              localQuestionCode: "Q0014-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Additional Requirements",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0014-01-01-01",
                  localQuestionCode: "Q0014-01-01-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0014-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Application Name",
                      hideUnits: true,
                      questionCode: "Q0014-01-01-01-01",
                      localQuestionCode: "Q0014-01-01-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Version Number",
                      hideUnits: true,
                      questionCode: "Q0014-01-01-02-01",
                      localQuestionCode: "Q0014-01-01-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question:
                "Does the Solution require any vendor-proprietary software to be installed on the workstation (i.e. desktop, laptop or local device)?",
              hideUnits: true,
              questionCode: "Q0014-01-02",
              localQuestionCode: "Q0014-01-02",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0014-01-02-01",
                  localQuestionCode: "Q0014-01-02-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0014-01-02",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Application Name",
                      hideUnits: true,
                      questionCode: "Q0014-01-02-01-01",
                      localQuestionCode: "Q0014-01-02-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Version Number",
                      hideUnits: true,
                      questionCode: "Q0014-01-02-02-01",
                      localQuestionCode: "Q0014-01-02-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question:
                "Windows 7 Professional is the standard for Operating System for Windows client devices, is the OS supported by the Solution?",
              hideUnits: true,
              questionCode: "Q0014-01-03",
              localQuestionCode: "Q0014-01-03",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0014-01-03-01-01",
                  localQuestionCode: "Q0014-01-03-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0014-01-03",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "The standard operating system patching follows Microsoft's scheduled releases. Patches are tested and pushed via an automated patch management tool set. Are there concerns about the Application's compatibility with this approach for patch management?",
              hideUnits: true,
              questionCode: "Q0014-01-04",
              localQuestionCode: "Q0014-01-04",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0014-01-04-01-01",
                  localQuestionCode: "Q0014-01-04-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0014-01-04",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
          ],
        },
        {
          question: "6.3 - Data Access and Connectivity",
          header: true,
          hideUnits: true,
          questionCode: "Q0015-01",
          localQuestionCode: "Q0015-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question:
                "Does the Solution require drive mapping via drive letter or UNC path?",
              hideUnits: true,
              questionCode: "Q0015-01-01",
              localQuestionCode: "Q0015-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0015-01-01-01-01",
                  localQuestionCode: "Q0015-01-01-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0015-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
          ],
        },
        {
          question: "6.4 - Client Software Installation and Execution",
          header: true,
          hideUnits: true,
          questionCode: "Q0016-01",
          localQuestionCode: "Q0016-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question:
                "Does the Solution require Local Administrative rights to install the workstation components?",
              hideUnits: true,
              questionCode: "Q0016-01-01",
              localQuestionCode: "Q0016-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0016-01-01-01-01",
                  localQuestionCode: "Q0016-01-01-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0016-01-01",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "Does the Solution require Local Administrative rights to run the Solution?",
              hideUnits: true,
              questionCode: "Q0016-01-02",
              localQuestionCode: "Q0016-01-02",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0016-01-02-01-01",
                  localQuestionCode: "Q0016-01-02-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0016-01-02",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "Can the client application be packaged for automated distribution through a software management solution (such as Altiris or Microsoft SCCM)?",
              hideUnits: true,
              questionCode: "Q0016-01-03",
              localQuestionCode: "Q0016-01-03",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "What format can the install package be provided?",
                  hideUnits: true,
                  questionCode: "Q0016-01-03-01-01",
                  localQuestionCode: "Q0016-01-03-01-01",
                  units: null,
                  dataType: "CNE",
                  answers: [
                    {
                      text: ".msi (Microsoft Installer)",
                      code: "1",
                    },
                    {
                      text: "Other",
                      code: "2",
                    },
                  ],
                  answerCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions: "",
                  copyrightNotice: null,
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0016-01-03",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "The standard virus protection is Symantec EndPoint Protection v11. Virus definition files are centrally managed, up-to-date and real time scanning is enabled. Are there concerns about the Application's compatibility with this solution for virus protection?",
              hideUnits: true,
              questionCode: "Q0016-01-04",
              localQuestionCode: "Q0016-01-04",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0016-01-04-01-01",
                  localQuestionCode: "Q0016-01-04-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0016-01-04",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
          ],
        },
        {
          question: "6.5 - Client Peripherals",
          header: true,
          hideUnits: true,
          questionCode: "Q0017-01",
          localQuestionCode: "Q0017-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Black and White Printer Models",
              hideUnits: true,
              questionCode: "Q0017-01-01",
              localQuestionCode: "Q0017-01-01",
              units: null,
              dataType: "TX",
              codingInstructions: "",
              copyrightNotice: null,
              editable: "0",
              value:
                "1. HP Laserjet M602N B and W Laser Printer, 2. HP Laserjet 9040DN Large Format B and W Laser Printer w/ duplexer, 3. HP Laserjet p1606DN Low Volume B and W Laser Printer",
            },
            {
              question: "Color Printers",
              hideUnits: true,
              questionCode: "Q0017-01-02",
              localQuestionCode: "Q0017-01-02",
              units: null,
              dataType: "TX",
              codingInstructions: "",
              copyrightNotice: null,
              editable: "0",
              value: "HP Color Laserjet M551N Color Laser Printer",
            },
            {
              question: "Multi Function Printers",
              hideUnits: true,
              questionCode: "Q0017-01-03",
              localQuestionCode: "Q0017-01-03",
              header: true,
              items: [
                {
                  question: "Color MFPs",
                  hideUnits: true,
                  questionCode: "Q0017-01-03-01",
                  localQuestionCode: "Q0017-01-03-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  editable: "0",
                  value:
                    "1. HP Officejet 8600 plus inkjet MFP, 2. HP Officejet 8500A inject MFP",
                },
                {
                  question: "Black and White MFP",
                  hideUnits: true,
                  questionCode: "Q0017-01-03-02",
                  localQuestionCode: "Q0017-01-03-02",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  editable: "0",
                  value: "HP Laserjet M1536 Black and White Laser MFP",
                },
              ],
            },
            {
              question: "Clinical Printers",
              hideUnits: true,
              questionCode: "Q0017-01-04",
              localQuestionCode: "Q0017-01-04",
              units: null,
              dataType: "TX",
              codingInstructions: "",
              copyrightNotice: null,
              editable: "0",
              value:
                "1. Zebra ZM400 label printer, 2. Stars Micronics Pharmacy Printer, 3. OkiData ML490 Impact Printer, 4.Zebra QL220 Wireless Label Printer",
            },
            {
              question:
                "If printing is required, is the Solution compatible with one of the following standard printers?",
              hideUnits: true,
              questionCode: "Q0017-01-05",
              localQuestionCode: "Q0017-01-05",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
                {
                  text: "N/A",
                  code: "3",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Additional requirements",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0017-01-05-01",
                  localQuestionCode: "Q0017-01-05-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0017-01-05",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Printer Model",
                      hideUnits: true,
                      questionCode: "Q0017-01-05-01-01",
                      localQuestionCode: "Q0017-01-05-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Required Driver",
                      hideUnits: true,
                      questionCode: "Q0017-01-05-02-01",
                      localQuestionCode: "Q0017-01-05-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question:
                "If scanning is required, is the Solution compatible with one of the following standard scanners? 1. Fujitsu FI-6130Z Color / Duplex scanner, 2. HP Scanjet 5590 Scanner, 3. HP Scanjet 6310 Scanner, 4. Kodak i420 high volume scanner",
              hideUnits: true,
              questionCode: "Q0018-01-05",
              localQuestionCode: "Q0018-01-05",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
                {
                  text: "N/A",
                  code: "3",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Additional requirements",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0018-01-05-01",
                  localQuestionCode: "Q0018-01-05-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0018-01-05",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Scanner Model",
                      hideUnits: true,
                      questionCode: "Q0018-01-05-01-01",
                      localQuestionCode: "Q0018-01-05-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Required Driver",
                      hideUnits: true,
                      questionCode: "Q0018-01-05-02-01",
                      localQuestionCode: "Q0018-01-05-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question: "Mobile handheld devices Standard",
              hideUnits: true,
              header: true,
              questionCode: "Q0019-01",
              localQuestionCode: "Q0019-01",
              items: [
                {
                  question: "Motorola MC70",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0019-01-02-01",
                  localQuestionCode: "Q0019-01-02-01",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor (?)",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-01-01",
                      localQuestionCode: "Q0019-01-02-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "XScale PXA270 624MHz",
                    },
                    {
                      question: "Screen",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-01-02",
                      localQuestionCode: "Q0019-01-02-01-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "3.5'' QVGA Screen",
                    },
                    {
                      question: "Software",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-01-03",
                      localQuestionCode: "Q0019-01-02-01-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Windows Mobile 5",
                    },
                  ],
                },
                {
                  question: "Motorola MC75",
                  header: true,
                  hideUnits: true,
                  questionCode: "Q0019-01-02-02",
                  localQuestionCode: "Q0019-01-02-02",
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  items: [
                    {
                      question: "Processor(?)",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-02-01",
                      localQuestionCode: "Q0019-01-02-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Xscale PA320 806MHz",
                    },
                    {
                      question: "Screen",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-02-02",
                      localQuestionCode: "Q0019-01-02-02-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "3.5'' VGA display",
                    },
                    {
                      question: "Software",
                      hideUnits: true,
                      questionCode: "Q0019-01-02-02-03",
                      localQuestionCode: "Q0019-01-02-02-03",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                      editable: "0",
                      value: "Windows Mobile 6.5 Classic",
                    },
                  ],
                },
              ],
            },
            {
              question:
                "If mobile handheld devices are required for this Solution, are the above standards sufficient?",
              hideUnits: true,
              questionCode: "Q0020-01-05",
              localQuestionCode: "Q0020-01-05",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
                {
                  text: "N/A",
                  code: "3",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0020-01-05-01",
                  localQuestionCode: "Q0020-01-05-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0020-01-05",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Processor (?)",
                      hideUnits: true,
                      questionCode: "Q0020-01-05-01-01",
                      localQuestionCode: "Q0020-01-05-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Screen",
                      hideUnits: true,
                      questionCode: "Q0020-01-05-02-01",
                      localQuestionCode: "Q0020-01-05-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Software",
                      hideUnits: true,
                      questionCode: "Q0020-01-05-03-01",
                      localQuestionCode: "Q0020-01-05-03-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question:
                "Does the Solution require any additional proprietary handheld devices?",
              hideUnits: true,
              questionCode: "Q0021-01-05",
              localQuestionCode: "Q0021-01-05",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "",
                  hideUnits: true,
                  header: true,
                  questionCode: "Q0021-01-05-01",
                  localQuestionCode: "Q0021-01-05-01",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0021-01-05",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  items: [
                    {
                      question: "Manufacturer",
                      hideUnits: true,
                      questionCode: "Q0021-01-05-01-01",
                      localQuestionCode: "Q0021-01-05-01-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                    {
                      question: "Model Number",
                      hideUnits: true,
                      questionCode: "Q0021-01-05-02-01",
                      localQuestionCode: "Q0021-01-05-02-01",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
            {
              question:
                "Are there any other considerations or concerns related to the Workstation that should be taken into consideration?",
              hideUnits: true,
              questionCode: "Q0022-01-04",
              localQuestionCode: "Q0022-01-04",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0022-01-04-01-01",
                  localQuestionCode: "Q0022-01-04-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0022-01-04",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "The following documentation has been provided and can be referenced for more information related to Workstation.",
              hideUnits: true,
              questionCode: "Q0023-01",
              localQuestionCode: "Q0023-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "N/A: Vendor documentation is not available",
                  code: "NA",
                },
                {
                  text: "Vendor Documentation Provided (Details defined below)",
                  code: "Y",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Add Document",
                  questionCode: "Q0023-Document",
                  localQuestionCode: "Q0023-Document",
                  header: true,
                  hideUnits: true,
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0023-01",
                        trigger: {
                          code: "Y",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Document Name",
                      hideUnits: true,
                      questionCode: "Q0023-01-01",
                      localQuestionCode: "Q0023-01-01",
                      units: null,
                      dataType: "CNE",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: 1,
                      },
                      codingInstructions:
                        "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                      copyrightNotice: null,
                    },
                    {
                      question: "Page Number",
                      hideUnits: true,
                      questionCode: "Q0023-01-02",
                      localQuestionCode: "Q0023-01-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "7.0 - Messaging",
      header: true,
      hideUnits: true,
      questionCode: "Q0024-01",
      localQuestionCode: "Q0024-01",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "MedStar has standardized on Microsoft Exchange 2007 as the Enterprise class email system.",
          header: true,
          hideUnits: true,
          questionCode: "Q0024-01-01",
          localQuestionCode: "Q0024-01-01",
          units: null,
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question:
                "Does the Solution integrate with any of the following? (Technical Documentation should be included for any selected options.)",
              hideUnits: true,
              questionCode: "Q0024-01-01-01",
              localQuestionCode: "Q0024-01-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "None",
                  code: "1",
                },
                {
                  text: "MS Exchange",
                  code: "2",
                },
                {
                  text: "MS Outlook",
                  code: "3",
                },
                {
                  text: "Pager notification gateway",
                  code: "4",
                },
                {
                  text: "Smart Phones",
                  code: "5",
                },
                {
                  text: "Instant Messaging",
                  code: "6",
                },
                {
                  text: "Other",
                  code: "7",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "MS Exchange: Supported Version",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-01",
                  localQuestionCode: "Q0024-01-01-01-01-01",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "2",
                        },
                      },
                    ],
                    action: "show",
                  },
                  copyrightNotice: null,
                },
                {
                  question: "MS Outlook: Supported Version",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-02",
                  localQuestionCode: "Q0024-01-01-01-01-02",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "3",
                        },
                      },
                    ],
                    action: "show",
                  },
                  copyrightNotice: null,
                },
                {
                  question: "Pager notification gateway: Supported Version",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-03",
                  localQuestionCode: "Q0024-01-01-01-01-03",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "4",
                        },
                      },
                    ],
                    action: "show",
                  },
                  copyrightNotice: null,
                },
                {
                  question: "Smart Phones: Supported Version",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-04",
                  localQuestionCode: "Q0024-01-01-01-01-04",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "5",
                        },
                      },
                    ],
                    action: "show",
                  },
                  copyrightNotice: null,
                },
                {
                  question: "Instant Messaging: Supported Version",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-05",
                  localQuestionCode: "Q0024-01-01-01-01-05",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "6",
                        },
                      },
                    ],
                    action: "show",
                  },
                  copyrightNotice: null,
                },
                {
                  question: "Other",
                  hideUnits: true,
                  questionCode: "Q0024-01-01-01-01-06",
                  localQuestionCode: "Q0024-01-01-01-01-06",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-01-01",
                        trigger: {
                          code: "7",
                        },
                      },
                    ],
                    action: "show",
                  },
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  copyrightNotice: null,
                },
              ],
            },
            {
              question:
                "Are there any other considerations or concerns related to Messaging that should be taken into consideration?",
              hideUnits: true,
              questionCode: "Q0024-01-04",
              localQuestionCode: "Q0024-01-04",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "Yes",
                  code: "1",
                },
                {
                  text: "No",
                  code: "2",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Please specify",
                  hideUnits: true,
                  questionCode: "Q0024-01-04-01-01",
                  localQuestionCode: "Q0024-01-04-01-01",
                  units: null,
                  dataType: "TX",
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0024-01-04",
                        trigger: {
                          code: "1",
                        },
                      },
                    ],
                    action: "show",
                  },
                },
              ],
            },
            {
              question:
                "The following documentation has been provided and can be referenced for more information related to Messaging.",
              hideUnits: true,
              questionCode: "Q0025-01",
              localQuestionCode: "Q0025-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "N/A: Vendor documentation is not available",
                  code: "NA",
                },
                {
                  text: "Vendor Documentation Provided (Details defined below)",
                  code: "Y",
                },
              ],
              answerCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
              items: [
                {
                  question: "Add Document",
                  questionCode: "Q0025-Document",
                  localQuestionCode: "Q0025-Document",
                  header: true,
                  hideUnits: true,
                  units: null,
                  codingInstructions: "",
                  copyrightNotice: null,
                  questionCardinality: {
                    min: 1,
                    max: "*",
                  },
                  skipLogic: {
                    conditions: [
                      {
                        source: "Q0025-01",
                        trigger: {
                          code: "Y",
                        },
                      },
                    ],
                    action: "show",
                  },
                  items: [
                    {
                      question: "Document Name",
                      hideUnits: true,
                      questionCode: "Q0025-01-01",
                      localQuestionCode: "Q0025-01-01",
                      units: null,
                      dataType: "CNE",
                      answers: null,
                      questionCardinality: {
                        min: 1,
                        max: 1,
                      },
                      codingInstructions:
                        "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                      copyrightNotice: null,
                    },
                    {
                      question: "Page Number",
                      hideUnits: true,
                      questionCode: "Q0025-01-02",
                      localQuestionCode: "Q0025-01-02",
                      units: null,
                      dataType: "ST",
                      codingInstructions: "",
                      copyrightNotice: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "8.0 - Hardware and Software",
      header: true,
      hideUnits: true,
      questionCode: "Q0026-01",
      localQuestionCode: "Q0026-01",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "Is there any required MedStar hosted server hardware, appliance or equipment that is dedicated to the Solution? (See additional Server Section and fill out in house document)",
          hideUnits: true,
          questionCode: "Q0026-01-01-01",
          localQuestionCode: "Q0026-01-01-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "No",
              code: "1",
            },
            {
              text: "Yes",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "What is the user interface/client access application for consumption / use of the data?",
          hideUnits: true,
          questionCode: "Q0026-01-01-02",
          localQuestionCode: "Q0026-01-01-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Web page (no impact to desktop)",
              code: "1",
            },
            {
              text: "Citrix",
              code: "2",
            },
            {
              text:
                "Full Client application (See additional Workstation Section)",
              code: "3",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Specify all application protocols / ports (TCP, UDP, Number), direction and hosts which require access for direct or site-to-site VPN connected hosted applications as well as the client access requirements (Firewall configuration). Specify the requirements.",
          hideUnits: true,
          questionCode: "Q0026-01-01-03",
          localQuestionCode: "Q0026-01-01-03",
          units: null,
          dataType: "TX",
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Are there any other considerations or concerns related to the Hosted Offering that should be taken into consideration?",
          hideUnits: true,
          questionCode: "Q0026-01-01-04",
          localQuestionCode: "Q0026-01-01-04",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Yes",
              code: "1",
            },
            {
              text: "No",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q0026-01-04-01-01",
              localQuestionCode: "Q0026-01-04-01-01",
              units: null,
              dataType: "TX",
              codingInstructions: "",
              copyrightNotice: null,
              questionCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q0026-01-01-04",
                    trigger: {
                      code: "1",
                    },
                  },
                ],
                action: "show",
              },
            },
          ],
        },
        {
          question:
            "The following documentation has been provided and can be referenced for more information related to the Hosted Offering.",
          hideUnits: true,
          questionCode: "Q0026-01-01-05",
          localQuestionCode: "Q0026-01-01-05",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "N/A: Vendor documentation is not available",
              code: "NA",
            },
            {
              text: "Vendor Documentation Provided (Details defined below)",
              code: "Y",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Add Document",
              questionCode: "Q0026-Document",
              localQuestionCode: "Q0026-Document",
              header: true,
              hideUnits: true,
              units: null,
              codingInstructions: "",
              copyrightNotice: null,
              questionCardinality: {
                min: 1,
                max: "*",
              },
              skipLogic: {
                conditions: [
                  {
                    source: "Q0026-01-01-05",
                    trigger: {
                      code: "Y",
                    },
                  },
                ],
                action: "show",
              },
              items: [
                {
                  question: "Document Name",
                  hideUnits: true,
                  questionCode: "Q0026-01-01-05-01",
                  localQuestionCode: "Q0026-01-01-05-01",
                  units: null,
                  dataType: "CNE",
                  answers: null,
                  questionCardinality: {
                    min: 1,
                    max: 1,
                  },
                  codingInstructions:
                    "To attach a file to this question, select a file from the list of files shown in the drop down menu. To add a new document/file use Attach Files feature",
                  copyrightNotice: null,
                },
                {
                  question: "Page Number",
                  hideUnits: true,
                  questionCode: "Q0026-01-01-05-02",
                  localQuestionCode: "Q0026-01-01-05-02",
                  units: null,
                  dataType: "ST",
                  codingInstructions: "",
                  copyrightNotice: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      question: "9.0 - Test Systems - Vendor Hosted",
      header: true,
      hideUnits: true,
      questionCode: "Q0027-01",
      localQuestionCode: "Q0027-01",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "What approach can be used for setting up a test environment?",
          hideUnits: true,
          questionCode: "Q0027-01-01",
          localQuestionCode: "Q0027-01-01",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text:
                "Virtual- The production server can be partitioned in order to create a test environment",
              code: "1",
            },
            {
              text:
                "Physical- Additional server hardware will be required to create a test environment",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "Is there a cost associated with securing a test environment?",
          hideUnits: true,
          questionCode: "Q0027-01-01-02",
          localQuestionCode: "Q0027-01-01-02",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "No",
              code: "1",
            },
            {
              text: "Yes",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Please specify",
              hideUnits: true,
              questionCode: "Q0027-01-04-01-01",
              localQuestionCode: "Q0027-01-04-01-01",
              units: null,
              dataType: "TX",
              codingInstructions: "",
              copyrightNotice: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q0027-01-01-02",
                    trigger: {
                      code: "2",
                    },
                  },
                ],
                action: "show",
              },
            },
          ],
        },
        {
          question: "Describe how desktop and server patches are managed.",
          hideUnits: true,
          questionCode: "Q0027-01-01-04",
          localQuestionCode: "Q0027-01-01-04",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Monthly",
              code: "1",
            },
            {
              text: "Bundled",
              code: "2",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
          codingInstructions: "",
          copyrightNotice: null,
          items: [
            {
              question: "Please specify timeframe",
              hideUnits: true,
              questionCode: "Q0027-01-04-01-01",
              localQuestionCode: "Q0027-01-04-01-01",
              units: null,
              dataType: "CNE",
              answers: [
                {
                  text: "As Needed Basis",
                  code: "1",
                },
                {
                  text: "Quarterly",
                  code: "2",
                },
                {
                  text: "Semi-Annually",
                  code: "3",
                },
                {
                  text: "Annually",
                  code: "4",
                },
              ],
              answerCardinality: {
                min: 1,
                max: "*",
              },
              codingInstructions: "",
              copyrightNotice: null,
              skipLogic: {
                conditions: [
                  {
                    source: "Q0027-01-01-04",
                    trigger: {
                      code: "2",
                    },
                  },
                ],
                action: "show",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
