import React, { useState } from "react";

import {
  Col,
  FrequentlyDecrement,
  FrequentlyDecrement2,
  FrequentlyP,
  FrequentlyWrapper,
  FrequntlyBox2,
  FrequntlyContainer,
  FrequntlyH1,
  FrequntlyT2,
  FrequntlyText,
  MaxWidth,
  TitleSpan,
} from "./FrequentlyElements";

const Frequntly = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <FrequntlyContainer id="about">
      <FrequntlyH1>Frequently asked question</FrequntlyH1>
      <FrequntlyText>
        Answers to frequently asked questions If you can`t find the answer you
        are looking for here please let us know and we will definitely answer
      </FrequntlyText>
      <FrequentlyWrapper>
        <MaxWidth>
          {data.map((item, i) => (
            <FrequntlyBox2
              key={i}
              className={selected === i ? "border" : "border1"}
            >
              <Col onClick={() => toggle(i)}>
                <FrequntlyT2 className={selected === i ? "color" : "color1"}>
                  {item.question}
                </FrequntlyT2>
                <TitleSpan>
                  {selected === i ? (
                    <FrequentlyDecrement src="Frequently/close.svg" />
                  ) : (
                    <FrequentlyDecrement2 src="Frequently/plus.svg" />
                  )}
                </TitleSpan>
              </Col>
              <FrequentlyP
                className={selected === i ? "content show" : "content"}
              >
                {item.answer}
              </FrequentlyP>
            </FrequntlyBox2>
          ))}
        </MaxWidth>
      </FrequentlyWrapper>
    </FrequntlyContainer>
  );
};

export default Frequntly;

const data = [
  {
    question: "What is a Trucking Management System?",
    answer:
      "Trucking Management System (ProTrux) is a software tool developed to optimize the handling of fleet operations. It offers a wide range of functionalities such as accounting, load management, maintenance scheduling, and additional features to promote efficiency and cost savings.",
  },
  {
    question: "How can the ProTrux improve my fleet's efficiency?",
    answer:
      "Our ProTrux enhances efficiency by generating essential documents, planning routes intelligently, sending automated maintenance alerts, managing vendor payrolls, and offering detailed financial and performance analyses. These features help lower costs, improve delivery times, and maintain vehicle health.",
  },
  {
    question: "What reports can be generated within ProTrux?",
    answer:
      "Our ProTrux provides comprehensive reports on various aspects of your fleet's performance, including financial reports, maintenance schedules, route efficiency, and driver performance. These insights help you make data-driven decisions.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Absolutely. We offer dedicated customer support to assist you with any questions or issues you may have. Our support team is available during business hours to ensure you get the help you need.",
  },
  // {
  //   question: "How does the real-time tracking feature work?",
  //   answer:
  //     "Electronic logging devices like PT30 ELD and IOSiX ELD are the ones that can be connected to TT ELD software. ",
  // },
  {
    question: "How do I get started with your ProTrux?",

    answer: (
      <>
        Getting started has never been easier! Just visit our website and follow
        the instructions.
      </>
    ),
  },
  // {
  //   //7
  //   question: "What kind of reports can I generate with the TMS?",
  //   answer:
  //     "You can pick up your order from our office in 799 N Court Street, Suite 7 Medina OH 44256, USA. ",
  // },
  // {
  //   //8
  //   question: "Is there customer support available?",
  //   answer:
  //     "Answer: Our monthly fee is 105 USD. You can join our software any time - our system will calculate the amount of money you have to pay for the time left until the end of the month, and starting with the new month, you will have to pay 105 USD. If you don’t pay on time, you won’t be able to use our software. Also, we use Stripe Payments for fee transactions. ",
  // },
  // {
  //   //9
  //   question: "How do I get started with your TMS?",
  //   answer: (
  //     <>
  //       You can download necessary documents and manuals from our store{" "}
  //       <a
  //         target="_blank"
  //         rel="noreferrer"
  //         style={{ color: "#4080c9", hover: "red" }}
  //         href="https://store.tteld.com/"
  //       >
  //         (Store.tteld.com){" "}
  //       </a>{" "}
  //       , “Resources” page of{" "}
  //       <a
  //         target="_blank"
  //         rel="noreferrer"
  //         style={{ color: "#4080c9", hover: "red" }}
  //         href="https://app.tteld.com/#/auth/companies"
  //       >
  //         app.tteld.com{" "}
  //       </a>{" "}
  //       or Telegram channel named “TT ELD RESOURCES” (link:{" "}
  //       <a
  //         target="_blank"
  //         rel="noreferrer"
  //         style={{ color: "#4080c9", hover: "red" }}
  //         href="https://t.me/tteld_res"
  //       >
  //         https://t.me/tteld_res{" "}
  //       </a>{" "}
  //       ).
  //     </>
  //   ),
  // },
  // {
  //   //10
  //   question: "Where can I watch video lessons and tutorials ?  ",
  //   answer: (
  //     <>
  //       Answer: Of course, you can order device at our online store. Here is the
  //       link to our online store:{" "}
  //       <a
  //         target="_blank"
  //         rel="noreferrer"
  //         style={{ color: "#4080c9", hover: "red" }}
  //         href="https://t.me/tteld_res"
  //       >
  //         https://t.me/tteld_res{" "}
  //       </a>{" "}
  //     </>
  //   ),
  // },
  // {
  //   //11
  //   question: "Can I create IFTA reports for drivers using my ELD ?  ",
  //   answer:
  //     "Answer: Yes. You can create IFTA reports using our TT ELD software and device.   ",
  // },
  // {
  //   //12
  //   question: "Will ELD location data identify street addresses ?",
  //   answer: "Answer: Yes. This is possible with our GPS tracking system. ",
  // },
  // {
  //   //13
  //   question:
  //     "Does TT ELD have the Split-Sleeper break feature? How can I turn on the split-sleeper berth feature for my fleet ? ",
  //   answer:
  //     "Answer: TT ELD does have Split-Sleeper break feature and it works in compliance with FMCSA standards. You can turn it on in TT ELD’s dashboard page.",
  // },
  // {
  //   //14
  //   question: "Does TT ELD have the Split-Sleeper break feature? How can I turn on the split-sleeper berth feature for my fleet ? ",
  //   answer:
  //     "Answer: TT ELD does have Split-Sleeper break feature and it works in compliance with FMCSA standards. You can turn it on in TT ELD’s dashboard page.",
  // },
];

{
  /* <FrequntlyBox1>
            <Col>
              <FrequntlyH2>What is TT ELD ?</FrequntlyH2>
              <FrequentlyDecrement src="Frequently/minus.svg" />
            </Col>

            <FrequentlyP>
              Everything you need to manage your fleet. All in one place. Driver
              Safety, GPS Tracking, and ELD Compliance. The most easy-to-use ELD
              device and application
            </FrequentlyP>
          </FrequntlyBox1>
          <FrequntlyBox2>
            <Col2>
              <FrequntlyT2>What is TT ELD ?</FrequntlyT2>
              <FrequentlyDecrement2 src="Frequently/plus.svg" />
            </Col2>
          </FrequntlyBox2>
          <FrequntlyBox2>
            <Col2>
              <FrequntlyT2>What are the advantages of TT ELD</FrequntlyT2>
              <FrequentlyDecrement2 src="Frequently/plus.svg" />
            </Col2>
          </FrequntlyBox2>
          <FrequntlyBox2>
            <Col2>
              <FrequntlyT2>How TT ELD works</FrequntlyT2>
              <FrequentlyDecrement2 src="Frequently/plus.svg" />
            </Col2>
          </FrequntlyBox2>
          <FrequntlyBox2>
            <Col2>
              <FrequntlyT2>Why exactly TT ELD</FrequntlyT2>
              <FrequentlyDecrement2 src="Frequently/plus.svg" />
            </Col2>
          </FrequntlyBox2>
          <FrequntlyBox2>
            <Col2 id="request">
              <FrequntlyT2>Why should I buy TT ELD</FrequntlyT2>
              <FrequentlyDecrement2 src="Frequently/plus.svg" />
            </Col2>
          </FrequntlyBox2> */
}
// <svg width="147" height="50" viewBox="0 0 147 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <g clip-path="url(#clip0_4400_49305)">
//     <path d="M48.3984 12.2828L48.3984 37.3593C47.9822 38.5875 46.9241 39.1505 46.4471 39.2784L25.1126 49.002L23.5515 49.002C16.5267 45.8034 2.37304 39.3808 1.95674 39.2784C0.291598 38.2549 -0.0379688 36.9755 0.00544246 36.4637C0.0487729 28.4034 0.109494 12.2828 0.0054403 12.2828C-0.0986934 10.9522 1.26289 9.93721 1.95674 9.59605L23.5515 0.000437006L25.1125 0.000436872C32.1373 3.11367 46.239 9.39135 46.4471 9.59605C48.0082 10.4149 48.3984 11.7284 48.3984 12.2828Z" fill="#231B1B"/>
//     <path d="M44.3601 26.7289L44.4902 36.0803L24.9769 44.7803L23.676 44.7803L3.90253 36.2082L3.90253 26.7289L17.0093 26.7289L15.1188 32.1057L19.5489 32.1141L24.5716 17.0771L20.0343 17.0771L18.1437 22.2742L3.90253 22.2742L3.90253 12.667L23.676 4.09496L24.9769 4.09496L44.3601 12.667L44.4902 22.2742L30.9996 22.2742L32.512 17.017L27.7088 17.017L22.6811 32.1141L27.7088 32.1057L29.4871 26.7289L44.3601 26.7289Z" fill="#FFB94A"/>
//     <path d="M44.3601 26.7289L44.4902 36.0803L24.9769 44.7803L23.676 44.7803L3.90253 36.2082L3.90253 26.7289L17.0093 26.7289L15.1188 32.1057L19.5489 32.1141L24.5716 17.0771L20.0343 17.0771L18.1437 22.2742L3.90253 22.2742L3.90253 12.667L23.676 4.09496L24.9769 4.09496L44.3601 12.667L44.4902 22.2742L30.9996 22.2742L32.512 17.017L27.7088 17.017L22.6811 32.1141L27.7088 32.1057L29.4871 26.7289L44.3601 26.7289Z" stroke="#FFB94A" stroke-width="0.193607"/>
//   </g>
//   <path d="M65.8837 14.2507V34.0713H61.8134V14.2507H65.8837ZM71.9824 14.2507V17.4498H55.8101V14.2507H71.9824ZM83.3901 14.2507V34.0713H79.3198V14.2507H83.3901ZM89.4887 14.2507V17.4498H73.3164V14.2507H89.4887ZM111.324 30.8858V34.0713H100.774V30.8858H111.324ZM102.108 14.2507V34.0713H98.0241V14.2507H102.108ZM109.949 22.3233V25.427H100.774V22.3233H109.949ZM111.31 14.2507V17.4498H100.774V14.2507H111.31ZM126.448 30.8858V34.0713H116.47V30.8858H126.448ZM117.79 14.2507V34.0713H113.706V14.2507H117.79ZM134.875 34.0713H130.559L130.586 30.8858H134.875C135.945 30.8858 136.848 30.6453 137.584 30.1644C138.319 29.6743 138.872 28.9619 139.244 28.0271C139.625 27.0923 139.816 25.9625 139.816 24.6375V23.6709C139.816 22.6545 139.707 21.7606 139.489 20.9892C139.281 20.2178 138.967 19.5689 138.55 19.0425C138.133 18.5161 137.62 18.1214 137.012 17.8582C136.404 17.5859 135.705 17.4498 134.915 17.4498H130.478V14.2507H134.915C136.24 14.2507 137.452 14.4776 138.55 14.9314C139.657 15.3761 140.615 16.0159 141.422 16.8508C142.23 17.6858 142.852 18.684 143.287 19.8457C143.732 20.9983 143.954 22.2824 143.954 23.6982V24.6375C143.954 26.0441 143.732 27.3283 143.287 28.49C142.852 29.6516 142.23 30.6499 141.422 31.4848C140.624 32.3107 139.666 32.9505 138.55 33.4043C137.443 33.8489 136.218 34.0713 134.875 34.0713ZM132.873 14.2507V34.0713H128.789V14.2507H132.873Z" fill="#231B1B"/>
//   <defs>
//     <clipPath id="clip0_4400_49305">
//       <rect width="48.3987" height="49.0015" fill="white" transform="translate(48.3984 49.002) rotate(180)"/>
//     </clipPath>
//   </defs>
// </svg>
// <path d="M55.1467 11.8744V25.835H52.2798V11.8744H55.1467ZM59.4422 11.8744V14.1277H48.0513V11.8744H59.4422ZM67.4772 11.8744V25.835H64.6103V11.8744H67.4772ZM71.7728 11.8744V14.1277H60.3819V11.8744H71.7728ZM87.1524 23.5913V25.835H79.7215V23.5913H87.1524ZM80.6611 11.8744V25.835H77.7846V11.8744H80.6611ZM86.184 17.5603V19.7464H79.7215V17.5603H86.184ZM87.1428 11.8744V14.1277H79.7215V11.8744H87.1428ZM97.805 23.5913V25.835H90.7768V23.5913H97.805ZM91.7068 11.8744V25.835H88.8303V11.8744H91.7068ZM103.74 25.835H100.701L100.72 23.5913H103.74C104.494 23.5913 105.13 23.4219 105.648 23.0831C106.166 22.7379 106.556 22.2362 106.818 21.5778C107.086 20.9194 107.221 20.1235 107.221 19.1903V18.5095C107.221 17.7936 107.144 17.1639 106.991 16.6206C106.844 16.0773 106.623 15.6202 106.329 15.2495C106.035 14.8787 105.674 14.6007 105.245 14.4153C104.817 14.2235 104.325 14.1277 103.769 14.1277H100.643V11.8744H103.769C104.702 11.8744 105.556 12.0342 106.329 12.3538C107.109 12.667 107.783 13.1177 108.352 13.7058C108.921 14.2939 109.359 14.997 109.666 15.8152C109.979 16.627 110.136 17.5315 110.136 18.5287V19.1903C110.136 20.1811 109.979 21.0856 109.666 21.9038C109.359 22.722 108.921 23.4251 108.352 24.0132C107.79 24.5949 107.115 25.0455 106.329 25.3651C105.549 25.6784 104.686 25.835 103.74 25.835ZM102.331 11.8744V25.835H99.4542V11.8744H102.331Z" fill="#f4f4f"/>
// <path d="M55.1467 11.8744V25.835H52.2798V11.8744H55.1467ZM59.4422 11.8744V14.1277H48.0513V11.8744H59.4422ZM67.4772 11.8744V25.835H64.6103V11.8744H67.4772ZM71.7728 11.8744V14.1277H60.3819V11.8744H71.7728ZM87.1524 23.5913V25.835H79.7215V23.5913H87.1524ZM80.6611 11.8744V25.835H77.7846V11.8744H80.6611ZM86.184 17.5603V19.7464H79.7215V17.5603H86.184ZM87.1428 11.8744V14.1277H79.7215V11.8744H87.1428ZM97.805 23.5913V25.835H90.7768V23.5913H97.805ZM91.7068 11.8744V25.835H88.8303V11.8744H91.7068ZM103.74 25.835H100.701L100.72 23.5913H103.74C104.494 23.5913 105.13 23.4219 105.648 23.0831C106.166 22.7379 106.556 22.2362 106.818 21.5778C107.086 20.9194 107.221 20.1235 107.221 19.1903V18.5095C107.221 17.7936 107.144 17.1639 106.991 16.6206C106.844 16.0773 106.623 15.6202 106.329 15.2495C106.035 14.8787 105.674 14.6007 105.245 14.4153C104.817 14.2235 104.325 14.1277 103.769 14.1277H100.643V11.8744H103.769C104.702 11.8744 105.556 12.0342 106.329 12.3538C107.109 12.667 107.783 13.1177 108.352 13.7058C108.921 14.2939 109.359 14.997 109.666 15.8152C109.979 16.627 110.136 17.5315 110.136 18.5287V19.1903C110.136 20.1811 109.979 21.0856 109.666 21.9038C109.359 22.722 108.921 23.4251 108.352 24.0132C107.79 24.5949 107.115 25.0455 106.329 25.3651C105.549 25.6784 104.686 25.835 103.74 25.835ZM102.331 11.8744V25.835H99.4542V11.8744H102.331Z" fill="#231B1B"/>
