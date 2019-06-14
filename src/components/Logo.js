import React from 'react'
import { useTheme } from './Theming'

const Logo = ({ props }) => {
  const theme = useTheme()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="115"
      viewBox="0 0 140 115"
      {...props}
    >
      <title>joelhooks.com</title>
      <defs>
        <path
          id="joelhooks-com-a"
          d="M9.78135788,18.1887142 C10.2162972,19.722325 10.2162972,22.5167089 9.78135788,26.5718657 C8.92142279,34.5894714 12.8167814,39.9728551 21.4674336,42.7220167 C25.9020439,46.9427999 28.119349,52.2456059 28.119349,58.6304348 C28.119349,68.2076781 19.3490054,68.4551876 19.3490054,77.747714 C19.3490054,83.9427317 20.0551482,87.0402405 21.4674336,87.0402405"
        />
        <path
          id="joelhooks-com-b"
          d="M29.5065557,31.2467623 C22.65141,35.7851028 19.2238372,42.596298 19.2238372,51.6803479 C19.2238372,65.3064227 34.0991287,65.3064227 26.9233931,89.4144311"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 -2)">
        <g transform="translate(0 48.543)">
          <rect
            width="53.797"
            height="39.087"
            stroke={theme.colors.text}
            strokeWidth="1.266"
            rx="1.266"
          />
          <g fill={theme.colors.text} transform="translate(3.797 22.696)">
            <rect width="6.329" height="1.261" y="11.348" rx=".63" />
            <rect width="6.329" height="1.261" x="9.494" y="11.348" rx=".63" />
            <rect width="6.962" height="1.261" x="20.253" y="11.348" rx=".63" />
            <rect width="3.797" height="1.261" x="10.759" y="7.565" rx=".63" />
            <rect width="4.43" height="1.261" y="7.565" rx=".63" />
            <rect width="5.063" height="1.261" x="17.089" y="3.783" rx=".63" />
            <rect width="10.759" height="1.261" y="3.783" rx=".63" />
            <rect width="6.329" height="1.261" rx=".63" />
          </g>
          <ellipse
            cx="3.797"
            cy="3.783"
            fill={theme.colors.text}
            rx="1.266"
            ry="1.261"
          />
          <ellipse
            cx="7.595"
            cy="3.783"
            fill={theme.colors.text}
            rx="1.266"
            ry="1.261"
          />
          <ellipse
            cx="11.392"
            cy="3.783"
            fill={theme.colors.text}
            rx="1.266"
            ry="1.261"
          />
        </g>
        <rect
          width="46.203"
          height="32.152"
          x="53.797"
          y="69.978"
          stroke={theme.colors.text}
          strokeWidth="1.266"
          rx="1.266"
        />
        <path
          fill={theme.colors.text}
          d="M90.225348,92.5025921 L92.5613317,92.110912 C92.9060667,92.0531094 93.2323878,92.2857141 93.2901903,92.630449 C93.3018084,92.6997392 93.3018084,92.7704804 93.2901903,92.8397706 L92.8985102,95.1757543 C92.8407077,95.5204893 92.5143865,95.7530939 92.1696516,95.6952914 C92.039763,95.6735126 91.9199037,95.6117567 91.8267764,95.5186295 L89.8824728,93.5743259 C89.6353056,93.3271586 89.6353056,92.9264213 89.8824728,92.679254 C89.9756001,92.5861268 90.0954594,92.5243708 90.225348,92.5025921 Z"
          transform="rotate(45 91.498 93.903)"
        />
        <g transform="translate(25.95)">
          <g transform="matrix(-1 0 0 1 59.494 0)">
            <g transform="translate(4.43)">
              <ellipse
                cx="24.051"
                cy="80.696"
                fill={theme.colors.body}
                stroke={theme.colors.text}
                strokeWidth="1.266"
                rx="15.19"
                ry="1.891"
              />
              <g strokeLinecap="square">
                <use
                  stroke={theme.colors.text}
                  strokeWidth="4.43"
                  xlinkHref="#joelhooks-com-a"
                />
                <use
                  stroke={theme.colors.body}
                  strokeWidth="1.899"
                  xlinkHref="#joelhooks-com-a"
                />
              </g>
              <g strokeLinecap="square">
                <use
                  stroke={theme.colors.text}
                  strokeWidth="4.43"
                  xlinkHref="#joelhooks-com-b"
                />
                <use
                  stroke={theme.colors.body}
                  strokeWidth="1.899"
                  xlinkHref="#joelhooks-com-b"
                />
              </g>
              <path
                fill={theme.colors.text}
                d="M25.5936392,20.0034333 L30.2070893,28.3852947 L30.2215314,39.0896256 C30.222003,39.4391725 30.5057492,39.7221541 30.8552962,39.7216825 C30.9952189,39.7214937 31.1311348,39.6749427 31.2417925,39.589308 L50.9970961,24.3012666 C51.2735347,24.087339 51.3242099,23.6898187 51.1102823,23.4133801 C51.0128249,23.2874451 50.8714773,23.2028749 50.71443,23.1765363 L26.2527946,19.0740535 C25.9080618,19.016238 25.581732,19.2488305 25.5239165,19.5935633 C25.5003403,19.7341399 25.5249073,19.8785591 25.5936392,20.0034333 Z"
                transform="rotate(-13 38.379 29.393)"
              />
              <path
                fill={theme.colors.text}
                d="M0.453590444,3.87804538 L3.51225721,9.78986617 L3.49704502,17.33182 C3.49633998,17.6813666 3.77913194,17.9653017 4.12867854,17.9660067 C4.27556092,17.966303 4.41797332,17.9155027 4.53150792,17.8223125 L17.8006592,6.93087395 C18.0708457,6.70910247 18.1100938,6.31029175 17.8883223,6.04010527 C17.7921394,5.92292466 17.6570907,5.84416048 17.507741,5.81813953 L1.12435592,2.9636907 C0.77999614,2.90369349 0.452200035,3.1342149 0.392202827,3.47857468 C0.368457708,3.61486208 0.390020075,3.75517595 0.453590444,3.87804538 Z"
                transform="rotate(-96 9.207 10.46)"
              />
              <path
                fill={theme.colors.text}
                d="M26.1260891,37.1822387 L22.9368733,34.8080481 C26.3918571,30.5872649 29.7139569,28.4768733 32.9031728,28.4768733 C36.0923886,28.4768733 35.9595046,29.5980188 32.5045208,31.8403099 L29.3153049,33.5545266 L26.1260891,37.1822387 Z"
              />
              <polygon
                fill={theme.colors.text}
                points="13.005 22.805 9.816 23.6 7.033 17.634 9.285 16.476"
                transform="rotate(17 10.02 20.038)"
              />
            </g>
            <g
              stroke={theme.colors.text}
              strokeWidth="1.266"
              transform="translate(32.55 54.593)"
            >
              <path
                fill={theme.colors.body}
                d="M2.39191189,10.5655431 C2.39191189,10.5655431 7.6375425,-5.67577566 22.3245109,2.1147756 C22.3245109,2.1147756 20.8392982,9.84769402 15.7202114,12.0180187 C10.8808629,14.0697436 2.39191189,10.5655431 2.39191189,10.5655431 Z"
              />
              <path d="M22.3245109,2.37419056 C12.9661468,7.44657888 5.52464318,10.6121663 0,11.8709528" />
              <polyline points="13.935 0 13.554 6.386 19.135 9.497" />
              <polyline points="9.966 1.187 8.77 8.696 14.351 12.662" />
            </g>
            <g
              stroke={theme.colors.text}
              strokeWidth="1.266"
              transform="scale(-1 1) rotate(-5 505.06 296.862)"
            >
              <path
                fill={theme.colors.body}
                d="M2.39191189,10.5655431 C2.39191189,10.5655431 7.6375425,-5.67577566 22.3245109,2.1147756 C22.3245109,2.1147756 20.8392982,9.84769402 15.7202114,12.0180187 C10.8808629,14.0697436 2.39191189,10.5655431 2.39191189,10.5655431 Z"
              />
              <path d="M22.3245109,2.37419056 C12.9661468,7.44657888 5.52464318,10.6121663 0,11.8709528" />
              <polyline points="13.935 0 13.554 6.386 19.135 9.497" />
              <polyline points="9.966 1.187 8.77 8.696 14.351 12.662" />
            </g>
          </g>
          <g
            fill={theme.colors.body}
            stroke={theme.colors.text}
            transform="translate(4.43 80.696)"
          >
            <path
              strokeWidth="1.266"
              d="M12.1548849,0.0667424164 C18.6730432,0.632160289 23.4821744,0.914869226 26.5822785,0.914869226 C29.6823721,0.914869226 34.4914813,0.632162193 41.0096062,0.066748127 L41.0095999,0.0666755412 C41.3578796,0.0364640585 41.6647073,0.29430926 41.6949188,0.642588919 C41.6983634,0.68229897 41.6980495,0.722245617 41.6939814,0.761896639 L40.9311398,8.19647852 C40.9004799,8.49530813 40.6639685,8.73140935 40.3650861,8.76155048 C35.7708169,9.22486465 31.1765477,9.45652174 26.5822785,9.45652174 C21.9880282,9.45652174 17.393778,9.22486657 12.7995278,8.76155622 L12.7995211,8.76162251 C12.5005818,8.73147577 12.2640253,8.49532965 12.2333596,8.19644315 L11.4705368,0.761929533 C11.4348582,0.414184588 11.687838,0.103358384 12.0355829,0.0676797758 C12.075232,0.0636117794 12.1151768,0.0632979325 12.1548849,0.0667424164 Z"
            />
            <path
              strokeWidth="1.266"
              d="M14.57587,8.79669734 C18.6344995,9.23658027 22.7421209,9.45652174 26.8987342,9.45652174 C31.0624583,9.45652174 35.2261824,9.23582711 39.3899065,8.79443786 L39.3899092,8.79446307 C39.7374949,8.75761611 40.0491392,9.00951964 40.0859861,9.35710536 C40.0908107,9.40261655 40.0906845,9.44851679 40.0856097,9.49400074 L37.3899205,33.6548951 C37.3628309,33.8976909 37.1984297,34.1032202 36.9675128,34.1829763 C34.8030486,34.9305573 31.4467891,35.3043478 26.8987342,35.3043478 C22.3588941,35.3043478 19.0557459,34.9319064 16.9892896,34.1870235 L16.9892903,34.1870217 C16.762357,34.1052204 16.6016557,33.9015327 16.5749071,33.6617939 L13.8785857,9.49618398 C13.8398215,9.1487529 14.0900455,8.83567976 14.4374766,8.79691555 C14.4834611,8.79178489 14.5298695,8.79171171 14.57587,8.79669734 Z"
            />
            <g transform="translate(.2 25.965)">
              <path
                strokeWidth="1.266"
                d="M15.1898734,0.161274014 C17.5882745,0.785976964 21.4246058,1.09832844 26.6988674,1.09832844 C31.973129,1.09832844 35.7317344,0.785976964 37.9746835,0.161274014"
              />
              <path
                strokeLinecap="round"
                strokeWidth="1.266"
                d="M16.2558294,3.3281092 C19.8423273,3.84125379 23.4288252,4.09782609 27.0153231,4.09782609 C30.601821,4.09782609 33.1334666,3.84125379 34.6102598,3.3281092"
              />
              <path
                strokeLinecap="round"
                strokeWidth=".633"
                d="M8.63709675 8.39357937L13.8974001 8.39357937M42.1814006 8.39357937L44.3514708 8.39357937M45.9788689 8.39357937L53.9140573 8.39357937M4.92646829 8.39357937L6.71765698 8.39357937M39.1036835 8.39357937L40.8948722 8.39357937M56.8252025 8.39357937L57.7115256 8.39357937M.496088545 8.39357937L1.38241173 8.39357937"
              />
            </g>
          </g>
        </g>
        <g transform="translate(79 48)">
          <circle cx="30" cy="30" r="30" fill="currentColor" />
          <path
            fill={theme.colors.body}
            d="M24 18L24 21.4121313 24 24.9925321 24 28.0135927 24 31.6687799C24 33.7441036 23.6719121 35.5919519 23.0141515 37.2107667 22.3563908 38.8280234 21.476735 40.2489658 20.3767689 41.4735937 19.226084 42.7621018 17.9232424 43.8652017 16.4698291 44.7813356 15.0148307 45.7005856 13.5661723 46.4391017 12.1254387 47L10 40.2629882C10.4422054 39.979423 10.8939205 39.6693709 11.3551455 39.337506 11.8179554 39.0040832 12.250651 38.6098963 12.6564021 38.1487133 13.3268425 37.4024069 13.8229367 36.6031268 14.1446847 35.749315 14.4664327 34.8970612 14.6280992 33.9341858 14.6280992 32.8653629 14.6280992 32.1673561 14.6312691 31.427282 14.6391939 30.6420244 14.6439488 29.8583248 14.6471188 28.6929028 14.6471188 27.1519905 14.6471188 25.9335948 14.6439488 24.7011766 14.6391939 23.4531779 14.6312691 22.2036211 14.6280992 21.250094 14.6280992 20.5925966L24 18zM45.9808685 37.1840625L36.7642727 39.7392406 36.7642727 37.1353475 36.7642727 30.1675369C36.5586092 30.2241091 36.3417856 30.2838242 36.1106134 30.3482537 35.8794412 30.4126831 35.6626177 30.4723982 35.4569541 30.5289704 35.2656392 30.5823998 35.05041 30.6421149 34.8128606 30.7081158 34.5753113 30.7741167 34.3744306 30.8306889 34.2070301 30.876261L34.2070301 35.8499012C34.2070301 38.2007908 34.2134072 39.7329548 34.2261616 40.4432504L25.0095657 43C24.9968114 42.2001318 24.9968114 40.8801135 25.0095657 39.0399453 25.0223201 37.199777 25.0286972 34.2988797 25.0286972 30.3372535L25.0286972 22.6528616C25.0286972 20.6398337 25.0223201 19.0275257 25.0095657 17.8143661L34.2261616 15.2591879C34.2261616 16.6750646 34.222973 18.1066559 34.2165958 19.5492472 34.2102186 20.99341 34.2070301 22.5130025 34.2070301 24.1033102 34.3744306 24.0577381 34.5657455 24.0043088 34.7841634 23.9445937 35.0025812 23.8833071 35.2194048 23.823592 35.4378227 23.7623055 35.6945035 23.6915902 35.9320528 23.6255893 36.1488764 23.5643027 36.3672943 23.5045876 36.5729578 23.4480154 36.7642727 23.3945861 36.777027 21.9991382 36.7802156 20.5345466 36.7738384 18.9992396 36.7674613 17.4670756 36.7642727 15.9836265 36.7642727 14.5551782L45.9808685 12C45.9936228 14.5284635 46 16.9092107 46 19.1406701L46 24.4820297 46 31.5362701C46 34.4827394 45.9936228 36.3653368 45.9808685 37.1840625"
          />
        </g>
      </g>
    </svg>
  )
}

export default Logo
