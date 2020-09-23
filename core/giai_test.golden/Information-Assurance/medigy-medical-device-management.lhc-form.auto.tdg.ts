// Generated from medigy-medical-device-management.lhc-form.json. DO NOT EDIT.

import { nihLhcForms as lforms, typedDataGen } from "../../deps.ts";

export const form: lforms.NihLhcForm = {
  code: "Q-Title",
  name: "Medigy Medical Device Management (MDM)",
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
      question: "Device Description",
      header: true,
      hideUnits: true,
      questionCode: "Q0022",
      localQuestionCode: "Q0022",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "Device Category",
          hideUnits: true,
          questionCode: "Q0022-01",
          localQuestionCode: "Q0022-01",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Document ID",
          hideUnits: true,
          questionCode: "Q0022-02",
          localQuestionCode: "Q0022-02",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Document Release Date",
          hideUnits: true,
          questionCode: "Q0022-03",
          localQuestionCode: "Q0022-03",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Software Revision",
          hideUnits: true,
          questionCode: "Q0022-04",
          localQuestionCode: "Q0022-04",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Software Release Date",
          hideUnits: true,
          questionCode: "Q0022-05",
          localQuestionCode: "Q0022-05",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Manufacturer Name",
          hideUnits: true,
          questionCode: "Q0022-06",
          localQuestionCode: "Q0022-06",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Representative Name / Position",
          hideUnits: true,
          questionCode: "Q0022-07",
          localQuestionCode: "Q0022-07",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Manufacturer Contact Information",
          hideUnits: true,
          questionCode: "Q0022-08",
          localQuestionCode: "Q0022-08",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Intended user of device in network-connected environment",
          hideUnits: true,
          questionCode: "Q0022-09",
          localQuestionCode: "Q0022-09",
          units: null,
          dataType: "TX",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Management of Private Data",
      header: true,
      hideUnits: true,
      questionCode: "Q003",
      localQuestionCode: "Q003",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "A.01 Can this device store, display, transmit or maintain Private Data (including electronic Protected Health Information (ePHI))?",
          hideUnits: true,
          questionCode: "Q003-01",
          localQuestionCode: "Q003-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "A.02 Types of Private Data elements that can be maintained by the device:",
          questionCode: "Q003-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-02",
          dataType: "CNE",
          answers: [
            {
              text:
                "A.03 Demographic (e.g., name, address, location, unique identification number)?",
              code: "Demographic",
            },
            {
              text:
                "A.04 Medical record (e.g., medical record #, account #, test or treatment date, device identification number)?",
              code: "Medical-record",
            },
            {
              text:
                "A.05 Diagnostic/therapeutic (e.g., photo/radiograph, test results, or physiologic data with identifying characteristics)?",
              code: "Diagnostic/therapeutic",
            },
            {
              text:
                "A.06 Open, unstructured text entered by device user/operator?",
              code: "Open",
            },
            {
              text:
                "A.07 Patient biometric data (Patient biological data from eyes, hand prints, thumb prints, etc.)",
              code: "Patient-biometric-data",
            },
            {
              text: "A.08 Personal financial information?",
              code: "Medical-record",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question: "A.09 Maintaining Private Data - Can the device:",
          questionCode: "Q003-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-03",
          dataType: "CNE",
          answers: [
            {
              text:
                "A.10 Store Private Data persistently on local or network attached media?",
              code: "Store-Private-Data",
            },
            {
              text: "A.11 Import/export Private Data with other systems?",
              code: "Import/export",
            },
            {
              text:
                "A.12 Maintain Private Data during power service interruptions?",
              code: "Maintain-Private-Data",
            },
            {
              text:
                "A.13 Maintain Private Data temporarily in volatile memory (i.e., until cleared by power-off or reset)?",
              code: "Maintain-Private-Data-temporarily",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question:
            "A.14 Mechanisms used for the transmitting, importing/exporting of Private Data - Can the device:",
          questionCode: "Q003-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q003-04",
          dataType: "CNE",
          answers: [
            {
              text:
                "A.15 Retrieve Private Data from or record Private Data to removable media (e.g., disk, DVD, CDROM, tape, CF/SD card, memory stick, etc.)?",
              code: "Retrieve-Private-Data",
            },
            {
              text:
                "A.16 Transmit/receive Private Data via an integrated wireless network connection? (e.g. WiFi, Bluetooth, infrared, etc.)",
              code: "Transmit/receive-integrated-wireless-network-connection",
            },
            {
              text:
                "A.17 Transmit/receive Private Data via a wired network connection? (e.g., LAN, WAN, VPN, intranet, Internet, etc.)",
              code: "Transmit/receive-wired-network-connection",
            },
            {
              text:
                "A.18 Transmit/receive or import/export Private Data via dedicated cable connection (e.g., IEEE 1073, serial port, USB, FireWire, etc.)?",
              code: "Transmit/receive-import/export",
            },
            {
              text:
                "A.19 Generate hardcopy reports or images containing Private Data?",
              code: "generate-hardcopy",
            },
            {
              text: "A.20 Import Private Data via scanning?",
              code: "import-private-data-scanning",
            },
            {
              text: "A.21 Display Private Data (e.g., video display, etc.)?",
              code: "display-private-data",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
      ],
    },
    {
      question: "Audit Controls",
      header: true,
      hideUnits: true,
      questionCode: "Q004",
      localQuestionCode: "Q004",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "B.01 Can the medical device create an audit trail?",
          hideUnits: true,
          questionCode: "Q004-01",
          localQuestionCode: "Q004-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "B.02 Indicate which of the following events are recorded in the audit log:",
          questionCode: "Q004-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-02",
          dataType: "CNE",
          answers: [
            {
              text: "B.03 Records of login/logout",
              code: "login/logout",
            },
            {
              text: "B.04 Records of display/presentation of data",
              code: "display/presentation",
            },
            {
              text: "B.05 Records of creation/modification/deletion of data",
              code: "creation/modification/deletion",
            },
            {
              text:
                "B.06 Records of import/export of data from removable media",
              code: "import/export",
            },
            {
              text:
                "B.07 Records of receipt/transmission of data from/to external (e.g. network) connection",
              code: "receipt/transmission",
            },
            {
              text: "B.08 Records of remote service activity",
              code: "remote-service",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question:
            "B.09 Indicate what information is used to identify individual events recorded in the audit log:",
          questionCode: "Q004-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-03",
          dataType: "CNE",
          answers: [
            {
              text: "B.10 user ID",
              code: "user-ID",
            },
            {
              text: "B.11 Date/Time",
              code: "Date/Time",
            },
            {
              text:
                "B.11 Patient identification data (e.g.name, address, birth date, Social Security Number)",
              code: "Patient-identification-data",
            },
            {
              text: "B.13 type of data accessed",
              code: "type-of-data",
            },
          ],
          answerCardinality: {
            min: 1,
            max: "*",
          },
        },
        {
          question:
            "B.14 Estimate the Adverse Consequences of the failure of Audit Controls",
          hideUnits: true,
          questionCode: "Q004-04",
          localQuestionCode: "Q004-04",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "B.15 Estimate the Level of Effort to remediate the risk of the failure of Audit Controls.",
          questionCode: "Q004-05",
          header: false,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q004-05",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q004-05-01",
              localQuestionCode: "Q004-05-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "Will the manufacturer need to seek FDA approval for device modifications required for the security mitigation?",
              hideUnits: true,
              questionCode: "Q004-05-02",
              localQuestionCode: "Q004-05-02",
              units: null,
              dataType: "CNE",
              codingInstructions: "",
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
              questionCardinality: {
                min: 1,
                max: 1,
              },
              copyrightNotice: null,
            },
            {
              question:
                "Does the manufacturer acknowledge and address the risk in a timely and collaborative manner?",
              hideUnits: true,
              questionCode: "Q004-05-03",
              localQuestionCode: "Q004-05-03",
              units: null,
              dataType: "CNE",
              codingInstructions: "",
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
              questionCardinality: {
                min: 1,
                max: 1,
              },
              copyrightNotice: null,
            },
            {
              question:
                "How long until the manufacturer deploys their security mitigation?",
              hideUnits: true,
              questionCode: "Q004-05-04",
              localQuestionCode: "Q004-05-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Automatic Logoff",
      header: true,
      hideUnits: true,
      questionCode: "Q005",
      localQuestionCode: "Q005",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "C.01 Can the device be configured to force reauthorization of logged-in user(s) after a predetermined length of inactivity (e.g., auto logoff, session lock, password protected screen saver)?",
          hideUnits: true,
          questionCode: "Q005-01",
          localQuestionCode: "Q005-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "C.02 Is the length of inactivity time before auto-logoff / screen lock user or administrator configurable? (indicate time (fixed or configurable range) in notes)",
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
        },
        {
          question:
            "C.03 Can auto log-off / screen lock be manually invoked (e.g. via a shortcut key or proximity sensor, etc.) by the user?",
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
        },
        {
          question:
            "C.04 Estimate the Adverse Consequences of the failure of Automatic Logoff",
          hideUnits: true,
          questionCode: "Q005-04",
          localQuestionCode: "Q005-04",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "C.05 Estimate the Level of Effort to remediate the risk of the failure of Automatic Logoff.",
          questionCode: "Q005-05",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q005-05",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q005-05-01",
              localQuestionCode: "Q005-05-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q005-05-02",
              localQuestionCode: "Q005-05-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q005-05-03",
              localQuestionCode: "Q005-05-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q005-05-04",
              localQuestionCode: "Q005-05-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Other Questions Affecting Exposure",
      header: true,
      hideUnits: true,
      questionCode: "Q006",
      localQuestionCode: "Q006",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "D.01 Does the device require access to the Internet?",
          hideUnits: true,
          questionCode: "Q006-01",
          localQuestionCode: "Q006-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "D.02 Is the internet access from the device managed by a list of URLs? Answer No if there is no internet access control mechanism",
          questionCode: "Q006-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-02",
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q006-01",
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
        },
        {
          question:
            "D.03.1 Do design controls assume the device or application run behind an institutional firewall?",
          questionCode: "Q006-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-03",
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
            "D.04.1 Do design controls assume the device or application run behind a subnet (e.g. department) firewall?",
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
        },
        {
          question:
            "D.05.1 Do design controls assume the device or application run on an isolated Network?",
          questionCode: "Q006-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-05",
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
            "D.06.1 Do design controls assume the device or application run only in a physically secured location (e.g. in a controlled area either with access control or staffing)?",
          questionCode: "Q006-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-06",
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
            "D.07.1 Do design controls assume the device is used only within a single department?",
          questionCode: "Q006-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q006-07",
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
            "D.08.1 Regarding review of Audit Trails / Logs. Based on design controls what is the recommended review frequency?",
          hideUnits: true,
          questionCode: "Q006-08",
          localQuestionCode: "Q006-08",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Authorization",
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
            "E.01 Does the device provide user authorization capabilities (e.g. user log in requirements)",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "E.02 Does the device support an authorization policy to assign different privilege levels within an application using Role-Based Access Control (RBAC)?",
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
        },
        {
          question:
            "E.03 Does the device allow device owner/operator to gain an unrestricted root or admin-level access authorization?",
          questionCode: "Q007-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-03",
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
            "E.04 Is the admin or root-level access the only authorization mode that is used for the device?",
          questionCode: "Q007-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-04",
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
            "E.05 Can the admin or root-level access be acquired unnecessarily?",
          questionCode: "Q007-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-05",
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
            "E.06 Does this device permit authorization requests from external systems?",
          questionCode: "Q007-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-06",
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
            "E.07 Does this device support an authorization policy using attribute based access control (ABAC)? Attributes are associated with users (e.g., organization, department, role), objects (i.e., resources) (e.g., owner, size) and environment (e.g., time, location).",
          questionCode: "Q007-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-07",
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
            "E.08 Estimate the Adverse Consequences of the failure of Authorization",
          hideUnits: true,
          questionCode: "Q007-08",
          localQuestionCode: "Q007-08",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "E.09 Estimate the Level of Effort to remediate the risk of the failure of Authorization.",
          questionCode: "Q007-09",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q007-09",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q007-09-01",
              localQuestionCode: "Q007-09-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q007-09-02",
              localQuestionCode: "Q007-09-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q007-09-03",
              localQuestionCode: "Q007-09-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q007-09-04",
              localQuestionCode: "Q007-09-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Cyber Security Product Upgrades",
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
            "F.01 Are the device operating system patches applied as they become available?",
          hideUnits: true,
          questionCode: "Q008-01",
          localQuestionCode: "Q008-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "F.02 Is the device running an operating system that is currently supported by the OS manufacturer?",
          questionCode: "Q008-02",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-02",
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
            "F.03 Is the manufacturer the only entity allowed to apply OS patches to the device?",
          questionCode: "Q008-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-03",
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
            "F.04 Is patching a part of vendor's routine OS maintenance process?",
          questionCode: "Q008-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-04",
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
            "F.05 Can the organization apply patches as part of their routine OS maintenance process?",
          questionCode: "Q008-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-05",
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
            "F.06 Estimate the Adverse Consequences of the failure of CyberSecurity Product Upgrades",
          hideUnits: true,
          questionCode: "Q008-06",
          localQuestionCode: "Q008-06",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "F.07 Estimate the Level of Effort to remediate the risk of the failure of Cybersecurity Product Upgrades.",
          questionCode: "Q008-07",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q008-07",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q008-07-01",
              localQuestionCode: "Q008-07-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q008-07-02",
              localQuestionCode: "Q008-07-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q008-07-03",
              localQuestionCode: "Q008-07-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q008-07-04",
              localQuestionCode: "Q008-07-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Malware Detection / Protection",
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
            "G.01 Does the device support the use of anti-malware software (to include anti-virus or other anti-malware mechanism)?",
          hideUnits: true,
          questionCode: "Q009-01",
          localQuestionCode: "Q009-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "G.02 How often is a malware/virus scan performed on the device?",
          hideUnits: true,
          questionCode: "Q009-02",
          localQuestionCode: "Q009-02",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.03 Can the user independently re-configure anti-malware settings?",
          questionCode: "Q009-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-03",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.04 Does notification of malware detection occur in the device user interface?",
          questionCode: "Q009-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-04",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.05 Can only manufacturer repair devices when malware is detected?",
          questionCode: "Q009-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-05",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.06.1 Can the device owner install or update antivirus software engines / definitions?",
          questionCode: "Q009-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-06",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.07 Can the device owner/operator (technically / physically) update virus definitions on manufacturer-installed antivirus software?",
          questionCode: "Q009-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-07",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
        },
        {
          question: "G.08 Virus patterns are automatically updated?",
          questionCode: "Q009-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-08",
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
          skipLogic: {
            conditions: [
              {
                source: "Q009-01",
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
            "G.09 Estimate the Adverse Consequences of the failure of Malware Detection / Protection",
          hideUnits: true,
          questionCode: "Q009-09",
          localQuestionCode: "Q009-09",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "G.10 Estimate the Level of Effort to remediate the risk of the failure of Malware Detection / Protection.",
          questionCode: "Q009-10",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q009-10",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q009-10-01",
              localQuestionCode: "Q009-10-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q009-10-02",
              localQuestionCode: "Q009-10-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q009-10-03",
              localQuestionCode: "Q009-10-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q009-10-04",
              localQuestionCode: "Q009-10-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Person Authentication",
      header: true,
      hideUnits: true,
      questionCode: "Q0010",
      localQuestionCode: "Q0010",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "H.01 Does the device support authentication (single/multi-users) using unique identifier and user credentials?",
          hideUnits: true,
          questionCode: "Q0010-01",
          localQuestionCode: "Q0010-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "H.02 Can the device be configured to authenticate users through an external authentication service (example: MS Active Directory, NDS, LDAP, etc.)?",
          hideUnits: true,
          questionCode: "Q0010-02",
          localQuestionCode: "Q0010-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "H.03 Does the device support multiple-factor authentication (e.g. biometric, token, password, etc.)?",
          questionCode: "Q0010-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-03",
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
            "H.04 Can the device be configured to lock out a user after a certain number of unsuccessful logon attempts?",
          questionCode: "Q0010-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-04",
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
          question: "H.05 Are any shared user IDs used in this system?",
          questionCode: "Q0010-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-05",
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
            "H.06 Can the device use a password for user / operator authentication?",
          questionCode: "Q0010-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-06",
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
            "H.07 Can default passwords be changed at/prior to installation?",
          questionCode: "Q0010-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-07",
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
          question: "H.08 Can the use of a password be bypassed?",
          questionCode: "Q0010-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-08",
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
          question: "H.09 Can the device enforce password complexity?",
          hideUnits: true,
          questionCode: "Q0010-09",
          localQuestionCode: "Q0010-09",
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
            "H.10 Can the password length be required to be 8 characters or more?",
          hideUnits: true,
          questionCode: "Q0010-10",
          localQuestionCode: "Q0010-10",
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
          skipLogic: {
            conditions: [
              {
                source: "Q0010-09",
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
            "H.11 Indicate which of the 4 character sets can be required in the password:",
          hideUnits: true,
          questionCode: "Q0010-11",
          localQuestionCode: "Q0010-11",
          units: null,
          dataType: "CNE",
          answers: [
            {
              text: "Upper Case Characters Used",
              code: "Upper",
            },
            {
              text: "Lower Case Characters Used",
              code: "Lower",
            },
            {
              text: "Numeric Characters Used",
              code: "Numeric",
            },
            {
              text: "Special Characters Used",
              code: "Special",
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
                source: "Q0010-09",
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
            "H.16 Are the users credentials (passwords) stored in clear text on the device or device server?",
          hideUnits: true,
          questionCode: "Q0010-12",
          localQuestionCode: "Q0010-12",
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
            "H.17 Are the users credentials (passwords) transmitted in clear text from the device for authentication?",
          hideUnits: true,
          questionCode: "Q0010-13",
          localQuestionCode: "Q0010-13",
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
            "H.18 Can the device support password expiration based on password aging?",
          hideUnits: true,
          questionCode: "Q0010-14",
          localQuestionCode: "Q0010-14",
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
            "H.19 Estimate the Adverse Consequences of the failure of Person Authentication",
          hideUnits: true,
          questionCode: "Q0010-15",
          localQuestionCode: "Q0010-15",
          units: null,
          dataType: "ST",
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "H.20 Estimate the Level of Effort to remediate the risk of the failure of Person Authentication.",
          questionCode: "Q0010-16",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0010-16",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q0010-16-01",
              localQuestionCode: "Q0010-16-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q0010-16-02",
              localQuestionCode: "Q0010-16-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q0010-16-03",
              localQuestionCode: "Q0010-16-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q0010-16-04",
              localQuestionCode: "Q0010-16-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "System and Application Hardening",
      header: true,
      hideUnits: true,
      questionCode: "Q0011",
      localQuestionCode: "Q0011",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "I.01 Does the device employ any hardening measures? Please indicate in the notes the level of  conformance to any industry recognized hardening standards.",
          hideUnits: true,
          questionCode: "Q0011-01",
          localQuestionCode: "Q0011-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "I.02 Is the device software key-protected to ensure the installed program and updates are authorized by the manufacturer?",
          hideUnits: true,
          questionCode: "Q0011-02",
          localQuestionCode: "Q0011-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "I.03 Does the device have external communication capability? (network, modem, etc.)?",
          questionCode: "Q0011-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-03",
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
            "I.04 Does the device encrypt transmitted data when sending over a shared network?",
          questionCode: "Q0011-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-04",
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
            "I.05 Does the file system allow the implementation of file-level access controls? (e.g., New  Technology File System (NTFS) for MS Windows platforms).",
          questionCode: "Q0011-05",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-05",
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
            "I.06 Are all unused and unnecessary accounts on the device disabled or deleted for both users and applications/APIs?",
          questionCode: "Q0011-06",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-06",
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
            "I.07 Are all unnecessary file shares on the device disabled?",
          questionCode: "Q0011-07",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-07",
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
          question: "I.08 Data in the file shares is encrypted.",
          questionCode: "Q0011-08",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-08",
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
          question: "I.09 Device file share is secured using authorization",
          hideUnits: true,
          questionCode: "Q0011-09",
          localQuestionCode: "Q0011-09",
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
          question: "I.10 Data in the device file share is in text files",
          hideUnits: true,
          questionCode: "Q0011-10",
          localQuestionCode: "Q0011-10",
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
            "I.11 Data in the file shares is in well known formats (.doc, .xls, .pdf, .mdb, etc).",
          hideUnits: true,
          questionCode: "Q0011-11",
          localQuestionCode: "Q0011-11",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0011-10",
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
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "I.12 Are all communication ports which are not required for the intended use of the device closed / disabled?",
          hideUnits: true,
          questionCode: "Q0011-12",
          localQuestionCode: "Q0011-12",
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
            "I.13 Are all unncessary services (e.g., Telnet, File Transfer Protocol (FTP), Internet Information Server (IIS), etc.) for the device disabled or deleted?",
          hideUnits: true,
          questionCode: "Q0011-13",
          localQuestionCode: "Q0011-13",
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
            "I.14 Are all unnecessary applications (COTS and OS-included applications, e.g. MS internet explorer) on the device disabled or deleted?",
          hideUnits: true,
          questionCode: "Q0011-14",
          localQuestionCode: "Q0011-14",
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
            "I.15 Can the device boot from uncontrolled or removable media (i.e. a source other than an internal drive or memory component)?",
          hideUnits: true,
          questionCode: "Q0011-15",
          localQuestionCode: "Q0011-15",
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
            "I.16 Does the device allow unauthorized addition of software or hardware?",
          hideUnits: true,
          questionCode: "Q0011-16",
          localQuestionCode: "Q0011-16",
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
            "I.17 Estimate the Adverse Consequences of the failure of System and Application Hardening",
          hideUnits: true,
          questionCode: "Q0011-17",
          localQuestionCode: "Q0011-17",
          units: null,
          dataType: "ST",
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "I.18 Estimate the Level of Effort to remediate the risk of the failure of System and Application Hardening.",
          questionCode: "Q0011-18",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0011-18",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q0011-18-01",
              localQuestionCode: "Q0011-18-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q0011-18-02",
              localQuestionCode: "Q0011-18-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q0011-18-03",
              localQuestionCode: "Q0011-18-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q0011-18-04",
              localQuestionCode: "Q0011-18-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Transmission Confidentiality and Integrity",
      header: true,
      hideUnits: true,
      questionCode: "Q0012",
      localQuestionCode: "Q0012",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question:
            "J.01 Can Private Data be transmitted only via a point-to-point dedicated cable?",
          hideUnits: true,
          questionCode: "Q0012-01",
          localQuestionCode: "Q0012-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "J.02 Is Private Data encrypted prior to transmission via a network or removable media? (if yes, Indicate in the notes which encryption standard is implemented)",
          hideUnits: true,
          questionCode: "Q0012-02",
          localQuestionCode: "Q0012-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "J.03 Is Private Data transmission restricted to a fixed list of network destinations?",
          questionCode: "Q0012-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-03",
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
            "K.01 Does the device use any controls to ensure integrity of the data during transmission? If yes, describe in the notes section how this is achieved.",
          questionCode: "Q0012-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-04",
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
            "K.02 Estimate the Adverse Consequences of the failure of Transmission Confidentiality and Integrity",
          hideUnits: true,
          questionCode: "Q0012-05",
          localQuestionCode: "Q0012-05",
          units: null,
          dataType: "ST",
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "K.03 Estimate the Level of Effort to remediate the risk of the failure of Transmission Confidentiality and Integrity.",
          questionCode: "Q0012-06",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0012-06",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q0012-06-01",
              localQuestionCode: "Q0012-06-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "Will the manufacturer need to seek FDA approval for device modifications required for the security mitigation?",
              hideUnits: true,
              questionCode: "Q0012-06-02",
              localQuestionCode: "Q0012-06-02",
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
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "Does the manufacturer acknowledge and address the risk in a timely and collaborative manner?",
              hideUnits: true,
              questionCode: "Q0012-06-03",
              localQuestionCode: "Q0012-06-03",
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
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How long until the manufacturer deploys their security mitigation?",
              hideUnits: true,
              questionCode: "Q0012-06-04",
              localQuestionCode: "Q0012-06-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Other Security Considerations - Remote Access",
      header: true,
      hideUnits: true,
      questionCode: "Q0013",
      localQuestionCode: "Q0013",
      units: null,
      codingInstructions: "",
      copyrightNotice: null,
      items: [
        {
          question: "L.01 Can the device be serviced remotely?",
          hideUnits: true,
          questionCode: "Q0013-01",
          localQuestionCode: "Q0013-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "L.02 Can application users log in remotely?",
          hideUnits: true,
          questionCode: "Q0013-02",
          localQuestionCode: "Q0013-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "L.03 Does the device use an existing standard for remote user access control and authorization?",
          questionCode: "Q0013-03",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-03",
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
            "L.04 Can the device restrict remote access to / from specified devices or users or network locations (e.g., specific IP addresses)?",
          questionCode: "Q0013-04",
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-04",
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
            "L.05 Can the device be configured to allow remote logins without local user knowledge and authorization?",
          hideUnits: true,
          questionCode: "Q0013-05",
          localQuestionCode: "Q0013-05",
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
          question: "L.06 Do remote maintenance users require root privilege?",
          hideUnits: true,
          questionCode: "Q0013-06",
          localQuestionCode: "Q0013-06",
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
            "L.07 Estimate the Adverse Consequences of the failure of Other Security Considerations - Remote Access",
          hideUnits: true,
          questionCode: "Q0013-07",
          localQuestionCode: "Q0013-07",
          units: null,
          dataType: "ST",
          answerCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "L.08 Estimate the Level of Effort to remediate the risk of the failure of controls in Other Categories.",
          questionCode: "Q0013-08",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0013-08",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q0013-08-01",
              localQuestionCode: "Q0013-08-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q0013-08-02",
              localQuestionCode: "Q0013-08-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q0013-08-03",
              localQuestionCode: "Q0013-08-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q0013-08-04",
              localQuestionCode: "Q0013-08-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Health Data Integrity and Authenticity",
      questionCode: "Q0014",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0014",
      items: [
        {
          question:
            "M.01 Does the device ensure the integrity of stored data with implicit or explicit error detection/correction technology?",
          hideUnits: true,
          questionCode: "Q0014-01",
          localQuestionCode: "Q0014-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Node Authentication",
      questionCode: "Q0015",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0015",
      items: [
        {
          question:
            "N.01 Does the device provide/support any means of node authentication that assures both the sender and the recipient of data are known to each other and are authorized to receive transferred information?",
          hideUnits: true,
          questionCode: "Q0015-01",
          localQuestionCode: "Q0015-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Physical Locks",
      questionCode: "Q0016",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0016",
      items: [
        {
          question:
            "O.01 Are all device components maintaining Private Data (other than removable media) physically secure (i.e. cannot remove without tools)?",
          hideUnits: true,
          questionCode: "Q0016-01",
          localQuestionCode: "Q0016-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Health Data Storage Confidentiality",
      questionCode: "Q0017",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0017",
      items: [
        {
          question: "P.01 Can the device encrypt data at rest?",
          hideUnits: true,
          questionCode: "Q0017-01",
          localQuestionCode: "Q0017-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "P.02 Estimate the Adverse Consequences of the failure of controls in Other Categories",
          hideUnits: true,
          questionCode: "Q0017-02",
          localQuestionCode: "Q0017-02",
          units: null,
          dataType: "ST",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "P.03 Estimate the Level of Effort to remediate the risk of the failure of Health Data Storage Confidentiality.",
          questionCode: "Q0017-03",
          header: true,
          hideUnits: false,
          noEmptyValue: true,
          localQuestionCode: "Q0017-03",
          items: [
            {
              question: "Who will do the work to mitigate the security risk?",
              hideUnits: true,
              questionCode: "Q0017-03-01",
              localQuestionCode: "Q0017-03-01",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question:
                "How complex would your organization consider this remediation project?",
              hideUnits: true,
              questionCode: "Q0017-03-02",
              localQuestionCode: "Q0017-03-02",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Capital Costs required",
              hideUnits: true,
              questionCode: "Q0017-03-03",
              localQuestionCode: "Q0017-03-03",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
            {
              question: "Indicate the Operating Costs",
              hideUnits: true,
              questionCode: "Q0017-03-04",
              localQuestionCode: "Q0017-03-04",
              units: null,
              dataType: "ST",
              questionCardinality: {
                min: 1,
                max: 1,
              },
              codingInstructions: "",
              copyrightNotice: null,
            },
          ],
        },
      ],
    },
    {
      question: "Unknown Vulnerability Management",
      questionCode: "Q0018",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0018",
      items: [
        {
          question: "Q.01 Has FUZZ testing been performed?",
          hideUnits: true,
          questionCode: "Q0018-01",
          localQuestionCode: "Q0018-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question: "Q.02 How long was FUZZ testing performed?",
          hideUnits: true,
          questionCode: "Q0018-02",
          localQuestionCode: "Q0018-02",
          units: null,
          dataType: "CNE",
          skipLogic: {
            conditions: [
              {
                source: "Q0018-01",
                trigger: {
                  code: "Y",
                },
              },
            ],
            action: "show",
          },
          answers: [
            {
              text: "Testing was performed for < 24 hours?",
              code: "<24h",
            },
            {
              text: "Testing was performed for < 1 week?",
              code: "<1w",
            },
          ],
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Security Guidance",
      questionCode: "Q0019",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0019",
      items: [
        {
          question:
            "R.01 Are security-related features documented for the device user?",
          hideUnits: true,
          questionCode: "Q0019-01",
          localQuestionCode: "Q0019-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "R.02 Are instructions available for device / media sanitization? i.e. instructions for how to achieve the permanent deletion of personal or other sensitive data.",
          hideUnits: true,
          questionCode: "Q0019-02",
          localQuestionCode: "Q0019-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
    {
      question: "Other MDS2 Questions",
      questionCode: "Q0020",
      header: true,
      hideUnits: false,
      noEmptyValue: true,
      localQuestionCode: "Q0020",
      items: [
        {
          question:
            "S.01 Can the device owner/operator reconfigure product security capabilities?",
          hideUnits: true,
          questionCode: "Q0020-01",
          localQuestionCode: "Q0020-01",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.02 Can relevant OS and device security patches be applied to the device as they become available?",
          hideUnits: true,
          questionCode: "Q0020-02",
          localQuestionCode: "Q0020-02",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.03 Can security patches or other software be installed remotely?",
          hideUnits: true,
          questionCode: "Q0020-03",
          localQuestionCode: "Q0020-03",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.04 Does the device provide an integral capability to de-identify private data?",
          hideUnits: true,
          questionCode: "Q0020-04",
          localQuestionCode: "Q0020-04",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.05 Does the device have an integral data backup capability (i.e., backup to remote storage or removable media such as tape, disk)?",
          hideUnits: true,
          questionCode: "Q0020-05",
          localQuestionCode: "Q0020-05",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.06 Does the device incorporate an emergency access ('break-glass') feature?",
          hideUnits: true,
          questionCode: "Q0020-06",
          localQuestionCode: "Q0020-06",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.07 List the provided or required (separately purchased and/or delivered) operating system(s) - including version number(s).",
          hideUnits: true,
          questionCode: "Q0020-07",
          localQuestionCode: "Q0020-07",
          units: null,
          dataType: "TX",
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
        {
          question:
            "S.08 Is a list of other third party applications provided by the manufacturer available?",
          hideUnits: true,
          questionCode: "Q0020-08",
          localQuestionCode: "Q0020-08",
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
          questionCardinality: {
            min: 1,
            max: 1,
          },
          codingInstructions: "",
          copyrightNotice: null,
        },
      ],
    },
  ],
};

export default form;

if (import.meta.main) {
  new typedDataGen.CliArgsEmitter(import.meta.url).emitJSON(form);
}
