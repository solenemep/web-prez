import React from "react";

import Card from "../Card";

const Projects = ({ activeSection }) => {
  const data = [
    {
      key: 1,
      date: "",
      title: "Kinesis Bridge",
      establishment: { name: "Kadena", url: "https://www.kadena.io/" },
      details: [
        "The Kadena bridge, powered by the Hyperlane permissionless protocol, enables seamless and secure asset transfers between the Kadena blockchain and other blockchains. This project offered an opportunity to quickly learn and apply the Pact programming language. By focusing on cross-chain communication, it deepened the understanding of smart contract design and interoperability.",
      ],
      skills: [
        "Solitidy",
        "Pact",
        "TypeScript",
        "Node.js",
        "Hyperlane",
        "Multichain",
      ],
      image: (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 324.6 312.4"
        >
          <path
            style={{ fill: "#4A9079" }}
            d="M324.6,312.4H211.4l-0.1-0.1l-0.9-0.7L70.3,202.2l57.4-46l196,155.4L324.6,312.4z"
          />
          <path
            style={{ fill: "#4A9079" }}
            d="M324.6,0H211.4l-0.1,0.1l-0.9,0.7L70.3,110.2l57.4,46l196-155.4L324.6,0z"
          />
          <path
            style={{ fill: "#4A9079" }}
            d="M70.3,163.1v39v0.1l0,109.4v0.7l-0.1-0.1l-0.9-0.7L1.2,257.7L1,257.6l-1-0.8V55.6l1-0.8l0.2-0.1L69.4,0.7
	l0.9-0.7L70.3,0v0.7l0,109.4v0.1v45.9V163.1z"
          />
        </svg>
      ),
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      key: 2,
      date: "",
      title: "Wallet Strategies",
      establishment: {
        name: "Dollet Wallet",
        url: "https://dolletwallet.com/",
      },
      details: [
        "Implementation of rentable strategies by integrating external protocols, improving users' ability to maximize their asset utilization. This involved developing smart contracts in Solidity that allowed interaction with various DeFi protocols, enabling users to lend, borrow, and earn yields on their assets.",
      ],
      skills: ["Solitidy", "TypeScript", "Foundry", "Oracle", "DeFi"],
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 20" fill="none">
          <path
            d="M15.9304 17.6564H1.87416C0.838686 17.6564 0 16.8203 0 15.7881C0 14.7559 0.838686 13.9198 1.87416 13.9198H15.9304C16.9658 13.9198 17.8045 14.7559 17.8045 15.7881C17.8045 16.8203 16.9658 17.6564 15.9304 17.6564Z"
            fill="#6DFFD5"
          ></path>
          <path
            d="M15.9304 5.97961H1.87416C0.838686 5.97961 0 5.14356 0 4.11133C0 3.0791 0.838686 2.24304 1.87416 2.24304H15.9304C16.9658 2.24304 17.8045 3.0791 17.8045 4.11133C17.8045 5.14356 16.9658 5.97961 15.9304 5.97961Z"
            fill="#6DFFD5"
          ></path>
          <path
            d="M35.4776 2.90526C33.5097 1.18644 30.6797 0.327026 26.983 0.327026H22.9629V19.5377H26.983C30.6797 19.5377 33.5144 18.6783 35.4776 16.9594C37.4267 15.2546 38.406 12.966 38.4247 9.93469C38.406 6.90339 37.4267 4.61007 35.4776 2.90526ZM32.6992 14.2224C31.5325 15.3387 29.9629 15.8992 27.9856 15.8992H26.9408V3.96551H27.9856C29.9582 3.96551 31.5325 4.526 32.6992 5.6423C33.8471 6.74459 34.4281 8.17383 34.4468 9.93002C34.4281 11.6909 33.8471 13.1248 32.6992 14.2224Z"
            fill="white"
          ></path>
          <path
            d="M57.2744 0.32695V19.7057L60.8166 19.3741V0L57.2744 0.32695Z"
            fill="white"
          ></path>
          <path
            d="M63.3975 0.32695V19.7057L66.9396 19.3741V0L63.3975 0.32695Z"
            fill="white"
          ></path>
          <path
            d="M47.5842 4.85754C43.2877 4.85754 39.8018 8.24381 39.8018 12.4241C39.8018 16.6044 43.2877 19.9907 47.5842 19.9907C51.8807 19.9907 55.3667 16.6044 55.3667 12.4241C55.3667 8.24381 51.8807 4.85754 47.5842 4.85754ZM47.5842 16.7492C45.2415 16.7492 43.3439 14.8155 43.3439 12.4241C43.3439 10.0374 45.2415 8.09902 47.5842 8.09902C49.9269 8.09902 51.8245 10.0327 51.8245 12.4241C51.8245 14.8108 49.9269 16.7492 47.5842 16.7492Z"
            fill="white"
          ></path>
          <path
            d="M76.381 16.7492C75.2612 16.7492 74.2538 16.2401 73.5323 15.4227L80.2277 11.2658L83.2779 9.37413C82.1113 6.71649 79.464 4.85754 76.3857 4.85754C72.2251 4.85754 68.8516 8.24381 68.8516 12.4241C68.8516 16.6044 72.2251 19.9907 76.3857 19.9907C78.7143 19.9907 80.8321 19.2667 82.4486 18.085L80.9493 15.0537C79.8904 16.0813 78.2411 16.7492 76.381 16.7492ZM76.381 8.00561C77.3415 8.00561 78.2224 8.38393 78.9064 9.00514L72.4359 12.9052C72.4172 12.7324 72.4031 12.5549 72.4031 12.3774C72.4031 9.96264 74.1836 8.00561 76.381 8.00561Z"
            fill="white"
          ></path>
          <path
            d="M92.0019 16.7491C91.1211 16.7491 90.4745 16.5717 90.0575 16.2167C89.6405 15.8617 89.4343 15.2545 89.4343 14.3951V8.55671H92.6719V5.31523H89.4343V1.25171L85.8922 2.96119V5.31523H84.5475L83.6572 8.55671H85.8968V15.1284C85.8968 16.6184 86.3326 17.8047 87.1994 18.6828C88.0709 19.5609 89.3781 20 91.1258 20C91.7583 20 92.3065 19.9439 92.4986 19.9159L93.4591 16.6464C93.2576 16.6744 92.6766 16.7491 92.0019 16.7491Z"
            fill="white"
          ></path>
        </svg>
      ),
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      key: 3,
      date: "",
      title: "Bet Game",
      establishment: {
        name: "Skorix",
        url: "",
      },
      details: [
        "A blockchain-based betting game developed using Solidity, designed to provide a transparent and secure gambling experience. Players can place bets on various outcomes, with smart contracts ensuring that all transactions are executed fairly and automatically.",
      ],
      skills: ["Solitidy", "Hardhat", "NFT"],
      image: (
        <svg
          viewBox="0 0 126 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3736 18.2258H6.30835C5.76044 18.2258 4.69962 17.5764 4.77851 16.0094C4.85741 14.4424 5.46888 11.7534 5.76475 10.6048C5.92912 9.77053 6.8025 7.88435 9.01933 7.88435C11.2362 7.88435 20.0603 7.8841 24.3756 7.8841C24.0844 8.93212 24.0716 9.90943 23.5157 10.6048C22.6795 11.6509 21.7439 11.4375 19.6958 11.4498C15.6877 11.474 13.1161 11.4498 12.3312 11.4498C10.8075 11.4498 9.98479 11.4072 9.66549 13.6758L9.5319 14.6433H20.3959C21.3978 14.6433 23.3372 14.3892 22.8453 17.5323L22.2187 21.4698C21.8617 23.7291 20.9578 24.9763 17.802 24.9763C14.6462 24.9763 7.90523 24.9312 6.71331 25.0861C5.52139 25.241 2.68311 25.9595 1.51172 27C1.69209 26.1321 2.56114 23.7832 3.46485 22.4135C4.0977 21.4544 4.7556 21.3966 5.91395 21.4151H15.3986C17.9942 21.4151 17.9842 20.6677 18.1687 19.521L18.3736 18.2258Z"
            fill="url(#paint0_linear_1459_45512)"
          />
          <path
            d="M27.0917 9.85805L24.6893 24.9763H29.0532L29.7223 20.7604L33.2621 18.0813L42.3456 11.2102H36.3244L30.5407 15.5919L31.7628 7.88483L28.3591 8.32545C27.4547 8.51258 27.2519 8.67269 27.0917 9.85805Z"
            fill="url(#paint1_linear_1459_45512)"
          />
          <path
            d="M35.6155 24.9757H42.0653L34.4576 18.977L31.1673 21.4672L35.6155 24.9757Z"
            fill="url(#paint2_linear_1459_45512)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.9193 14.7827L40.8547 21.402C40.6891 22.5062 41.5614 24.8347 44.6463 24.9759H53.2053C54.4269 24.9759 56.2485 24.1397 56.7754 21.4107L57.809 14.7895C57.9158 13.7122 56.7779 11.3791 54.0212 11.2115H46.1244C44.1809 11.2115 42.274 12.7604 41.9193 14.7827ZM45.3407 20.477L46.062 15.9941C46.1967 15.1779 46.4357 14.7816 47.4956 14.7816H52.1358C52.9443 14.7816 53.4144 15.119 53.2579 16.0171L52.5241 20.6539C52.385 21.3615 51.6356 21.4083 51.2794 21.4083H46.4657C45.8875 21.4083 45.196 21.2953 45.3407 20.477Z"
            fill="url(#paint3_linear_1459_45512)"
          />
          <path
            d="M61.4084 11.2141L59.2263 24.976H63.5909L64.4165 19.7351C64.8309 17.2696 67.2381 14.7883 72.9601 14.7883L73.528 11.2133C67.6419 11.3828 66.9696 12.4013 65.4319 13.322L65.7634 11.2141H61.4084Z"
            fill="url(#paint4_linear_1459_45512)"
          />
          <path
            d="M74.3764 24.9773H78.7395L80.9117 11.2138H76.559L74.3764 24.9773Z"
            fill="url(#paint5_linear_1459_45512)"
          />
          <path
            d="M77.0424 8.78588C76.7809 9.58519 76.78 9.81364 76.78 9.81364H81.1408L81.4953 7.57112C81.4953 7.57112 81.5705 7.17388 81.3993 7.06418C81.1275 6.88994 80.6242 7.12568 80.6242 7.12568L77.4636 8.27807C77.4636 8.27807 77.17 8.3956 77.0424 8.78588Z"
            fill="url(#paint6_linear_1459_45512)"
          />
          <path
            d="M97.8262 15.3288L79.5117 34L110.803 17.7558C115.732 14.8558 112.462 13.0623 110.366 12.0713C108.754 11.1342 109.819 9.98763 110.688 9.53582C110.688 9.53582 111.305 9.20461 111.712 9.01634C112.599 8.60625 113.137 8.46897 114.061 8.14846C116.328 7.36211 119.961 6.42217 119.961 6.42217L124.512 1L113.165 4.27871C111.68 4.73791 108.985 5.69754 106.67 7.15126C104.354 8.60499 102.29 10.5143 101.49 11.9364C102.811 12.3923 105.755 13.696 106.911 14.724C108.378 16.0009 107.763 16.905 106.665 17.4922L92.7852 24.2513L101.298 15.6431L97.8262 15.3288Z"
            fill="url(#paint7_linear_1459_45512)"
          />
          <path
            d="M83.1628 7.30315L90.9643 8.73818L96.7429 14.2914L93.7463 17.3454L83.1628 7.30315Z"
            fill="url(#paint8_linear_1459_45512)"
          />
          <path
            d="M98.2344 12.814L87.9388 3.02824L94.0658 4.15785L100.656 10.3749L98.2344 12.814Z"
            fill="url(#paint9_linear_1459_45512)"
          />
          <path
            d="M101.359 24.5584L105.356 22.4889L115.139 31.8193L107.408 30.3983L101.359 24.5584Z"
            fill="url(#paint10_linear_1459_45512)"
          />
          <path
            d="M113.487 27.3673L119.682 28.5068L110.488 19.7927L107.289 21.4596L113.487 27.3673Z"
            fill="url(#paint11_linear_1459_45512)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1459_45512"
              x1="19.2982"
              y1="-4.12046"
              x2="21.1151"
              y2="38.8063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1459_45512"
              x1="32.3293"
              y1="1.691"
              x2="33.9601"
              y2="39.0395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1459_45512"
              x1="32.3293"
              y1="1.691"
              x2="33.9601"
              y2="39.0395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_1459_45512"
              x1="32.3293"
              y1="1.691"
              x2="33.9601"
              y2="39.0395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_1459_45512"
              x1="32.3293"
              y1="1.691"
              x2="33.9601"
              y2="39.0395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_1459_45512"
              x1="32.3293"
              y1="1.691"
              x2="33.9601"
              y2="39.0395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB79FF" />
              <stop offset="1" stop-color="#6B91FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      links: [
        {
          name: "dapp",
          url: "https://skorix.com/en",
        },
        {
          name: "code",
          url: "https://github.com/solenemep/betmakerz",
        },
      ],
    },
    {
      key: 4,
      date: "",
      title: "Perpetual DEX",
      establishment: {
        name: "",
        url: "",
      },
      details: [
        "The orderbook-based perpetual trading DEX represents a significant advancement in the DeFi space, combining the advantages of traditional trading mechanisms with the benefits of decentralization. By utilizing a red-black tree for efficient order management, it enhances trade execution speed and accuracy. This innovative approach creates a new trading ecosystem, setting a new standard for decentralized applications in finance.",
      ],
      skills: ["Solitidy", "Foundry", "Oracle", "RedBlack Tree", "DeFi"],
      image: <svg height="0px"></svg>,
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      key: 5,
      date: "",
      title: "Decentralized Insurance",
      establishment: {
        name: "DEIN",
        url: "https://dein.fi/",
      },
      details: [
        "The DEIN project, a rebranding of Bridge Mutual, is a decentralized app focused on risk management, predictions, and insurance. It allows users to participate in a community-driven approach to insurance, enabling them to assess risks, set premiums, and manage claims transparently through smart contracts.",
      ],
      skills: ["Solitidy", "Hardhat", "Foundry", "DeFi"],
      image: (
        <svg
          class="about-svg"
          viewBox="0 0 337 387"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M335.609 96.7432L168.012 192.987V385.06L335.609 289.646V96.7432Z"
            stroke="#C0C0C0"
            stroke-width="0.82969"
            stroke-linejoin="bevel"
            class="KDyytarR_0"
          ></path>
          <path
            d="M168.012 102.551L246.003 148.184V238.205L168.012 283.423L90.0213 238.205V148.184L168.012 102.551Z"
            stroke="#B77333"
            stroke-width="0.82969"
            class="KDyytarR_1"
          ></path>
          <path
            d="M168.012 283.423L90.0213 238.205V148.598L168.012 192.987V283.423Z"
            stroke="#EDC675"
            stroke-width="0.82969"
            class="KDyytarR_2"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243.929 236.602V148.887L248.077 146.525L248.078 238.981L168.012 285.913V280.934L243.929 236.602Z"
            fill="#EDC675"
            class="KDyytarR_3"
          ></path>
          <path
            d="M168.012 0.914062L335.609 96.6051V289.646L168.012 192.987V0.914062Z"
            stroke="#6C97A2"
            stroke-width="0.82969"
            stroke-linejoin="bevel"
            class="KDyytarR_4"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83.1667 341.218L0 291.72V287.572L83.1667 336.523V341.218Z"
            fill="#C0C0C0"
            class="KDyytarR_5"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.414856 96.3284L168.427 0.914062V5.47736L4.14846 98.4026L0.414856 96.3284ZM170.501 384.231L170.087 193.817L165.938 191.328L166.353 386.72L170.501 384.231Z"
            fill="#6C97A2"
            class="KDyytarR_6"
          ></path>
        </svg>
      ),
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
  ];

  return (
    <section id="projects">
      <h3 className={activeSection === "projects" ? "active" : ""}>Projects</h3>
      <ul>
        {data.map((el) => {
          return (
            <Card
              date={el.date}
              title={el.title}
              establishment={el.establishment}
              details={el.details}
              skills={el.skills}
              image={el.image}
              links={el.links}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
