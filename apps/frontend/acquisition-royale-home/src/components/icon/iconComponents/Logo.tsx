import { IconProps } from '../icon.types'

type Props = Omit<IconProps, 'name'>

const Logo: React.FC<Props> = ({ color = 'white', width = '31', height = '35', onClick }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31 35"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M19.687 13.8495L18.2 15.3785C18.1603 15.4195 18.1128 15.4521 18.0602 15.4744C18.0076 15.4966 17.9511 15.5081 17.894 15.5081C17.8369 15.5081 17.7804 15.4966 17.7279 15.4744C17.6753 15.4521 17.6277 15.4195 17.588 15.3785L15.661 13.4025C15.6212 13.3616 15.5737 13.3291 15.5211 13.3069C15.4685 13.2847 15.4121 13.2733 15.355 13.2733C15.298 13.2733 15.2415 13.2847 15.1889 13.3069C15.1364 13.3291 15.0888 13.3616 15.049 13.4025L12.849 15.6755L11.36 17.2085L9.28203 19.3495L7.80002 20.8765L5.42702 23.3235L3.89802 24.9035L1.99103 26.8875C1.92474 26.9557 1.83759 26.9998 1.74339 27.0129C1.6492 27.0259 1.55334 27.0071 1.47102 26.9595L0.595025 26.4515L0.219026 26.2325C0.153137 26.1959 0.0981456 26.1424 0.0596707 26.0776C0.0211958 26.0128 0.000614023 25.9389 2.40847e-05 25.8635V24.9905C-0.00165504 24.7668 0.0845232 24.5513 0.240026 24.3905L2.99202 21.5565L5.13302 19.3565L5.72603 18.7445L7.21102 17.2155L9.29402 15.0745L10.779 13.5445L14.739 9.45251C14.8185 9.37077 14.9136 9.3058 15.0186 9.26144C15.1236 9.21707 15.2365 9.19421 15.3505 9.19421C15.4645 9.19421 15.5774 9.21707 15.6824 9.26144C15.7875 9.3058 15.8825 9.37077 15.962 9.45251L19.7 13.2785C19.7693 13.358 19.8067 13.4603 19.805 13.5657C19.8034 13.6711 19.7628 13.7722 19.691 13.8495H19.687Z"
      fill="current"
    />
    <path
      d="M30.8322 13.3114V25.3734C30.8321 25.5985 30.7728 25.8197 30.6601 26.0145C30.5473 26.2094 30.3853 26.3711 30.1902 26.4834L15.9902 34.6464C15.7956 34.7588 15.5749 34.8179 15.3502 34.8179C15.1255 34.8179 14.9048 34.7588 14.7102 34.6464L3.91417 28.3834C3.88313 28.3653 3.85662 28.3404 3.83667 28.3106C3.81671 28.2807 3.80383 28.2467 3.79901 28.2111C3.79419 28.1755 3.79755 28.1393 3.80884 28.1052C3.82013 28.0711 3.83906 28.0401 3.86417 28.0144L5.56417 26.2604C5.63045 26.1922 5.7176 26.1481 5.8118 26.1351C5.90599 26.122 6.00185 26.1408 6.08417 26.1884L15.1382 31.4424C15.2031 31.4799 15.2767 31.4996 15.3517 31.4996C15.4266 31.4996 15.5003 31.4799 15.5652 31.4424L27.6292 24.5074C27.6942 24.47 27.7482 24.4161 27.7858 24.3511C27.8234 24.2862 27.8432 24.2125 27.8432 24.1374V16.0644C27.8422 16.0079 27.8525 15.9517 27.8735 15.8992C27.8944 15.8466 27.9256 15.7988 27.9652 15.7584L30.4972 13.1674C30.5244 13.1384 30.56 13.1185 30.599 13.1104C30.638 13.1023 30.6785 13.1064 30.7151 13.1221C30.7517 13.1378 30.7825 13.1644 30.8035 13.1983C30.8244 13.2322 30.8344 13.2717 30.8322 13.3114Z"
      fill="current"
    />
    <path
      d="M26.9569 6.41545L25.2439 8.16545C25.1778 8.23317 25.091 8.27699 24.9973 8.29003C24.9035 8.30306 24.808 8.28457 24.7259 8.23745L15.5649 2.97445C15.5 2.93697 15.4264 2.91724 15.3514 2.91724C15.2765 2.91724 15.2028 2.93697 15.1379 2.97445L3.19994 9.90145C3.13523 9.93892 3.08151 9.99273 3.04413 10.0575C3.00675 10.1222 2.98702 10.1957 2.98694 10.2704V18.3134C2.98751 18.4254 2.94405 18.5332 2.86594 18.6134L0.334936 21.2314C0.314881 21.2522 0.290456 21.2682 0.263437 21.2783C0.236418 21.2884 0.207488 21.2923 0.178751 21.2898C0.150013 21.2873 0.122193 21.2785 0.0973146 21.2639C0.0724366 21.2493 0.051126 21.2293 0.0349366 21.2054C0.0137722 21.1727 0.00264761 21.1345 0.00293512 21.0954V9.04545C0.00299739 8.82121 0.0619674 8.60093 0.173937 8.40665C0.285906 8.21237 0.446945 8.05092 0.640936 7.93845L14.6999 -0.226551C14.8945 -0.338993 15.1152 -0.398193 15.3399 -0.398193C15.5646 -0.398193 15.7854 -0.338993 15.9799 -0.226551L26.9019 6.04445C26.9494 6.0715 26.9861 6.11421 27.0056 6.16528C27.0251 6.21635 27.0263 6.27261 27.0089 6.32445C26.9986 6.35828 26.9808 6.38937 26.9569 6.41545Z"
      fill="current"
    />
    <path
      d="M30.8332 8.55048V9.42848C30.8318 9.65374 30.7416 9.86935 30.5822 10.0285L27.8452 12.8285L25.7042 15.0095L25.0512 15.6795L23.5512 17.2095L21.4642 19.3505L19.9702 20.8805L15.9512 24.9905C15.8717 25.0722 15.7766 25.1372 15.6716 25.1815C15.5666 25.2259 15.4537 25.2488 15.3397 25.2488C15.2257 25.2488 15.1128 25.2259 15.0078 25.1815C14.9028 25.1372 14.8077 25.0722 14.7282 24.9905L11.0582 21.1955C10.9814 21.1159 10.9385 21.0096 10.9385 20.899C10.9385 20.7884 10.9814 20.6821 11.0582 20.6025L12.5432 19.0725C12.583 19.0316 12.6306 18.9991 12.6831 18.9769C12.7357 18.9547 12.7922 18.9433 12.8492 18.9433C12.9063 18.9433 12.9627 18.9547 13.0153 18.9769C13.0678 18.9991 13.1154 19.0316 13.1552 19.0725L15.0452 21.0135C15.0849 21.0545 15.1325 21.0871 15.185 21.1094C15.2376 21.1316 15.2941 21.1431 15.3512 21.1431C15.4083 21.1431 15.4648 21.1316 15.5174 21.1094C15.5699 21.0871 15.6175 21.0545 15.6572 21.0135L17.8892 18.7325L19.3832 17.2025L21.4702 15.0615L22.9642 13.5315L25.3792 11.0685L26.9202 9.49348L28.8482 7.52148C28.9143 7.4536 29.001 7.40967 29.0949 7.39664C29.1887 7.3836 29.2841 7.40219 29.3662 7.44948L30.2452 7.94948L30.6162 8.16348C30.6819 8.20188 30.7362 8.2572 30.7733 8.32368C30.8104 8.39016 30.829 8.46537 30.8272 8.54148L30.8332 8.55048Z"
      fill="current"
    />
  </svg>
)

export default Logo
