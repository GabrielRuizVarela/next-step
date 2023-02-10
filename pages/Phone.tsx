import styles from '@/styles/Home.module.css';
import { SVGProps } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

const femaleAvatarConfig = genConfig('female');
const maleAvatarConfig = genConfig('man');

export function IcBaselineArrowBackIosNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
      />
    </svg>
  );
}

export function MdiDotsVertical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

export function MdiPlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z" />
    </svg>
  );
}

export function MdiTelegram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
        fill="currentColor"
      />
    </svg>
  );
}

const LeftChatBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: {};
}) => {
  return (
    <div className={styles.leftChatBubble} style={style}>
      {children}
    </div>
  );
};
const RightChatBubble = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.rightChatBubble}>{children}</div>;
};
const AudioChatBubble = ({ style }: { style: {} }) => {
  return (
    <LeftChatBubble style={style}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexGrow: 1,
        }}
      >
        <MdiPlay />
        <div
          style={{
            width: 70,
            height: 1,
            border: '1px solid #2d2d2d',
          }}
        />
        0:16
      </div>
    </LeftChatBubble>
  );
};

export const Phone = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        height: 649,
        width: 288,
        marginTop: 100,
        border: '10px solid #2d2d2d',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 201,
      }}
    >
      <div
        style={{
          height: 73,
          backgroundColor: 'white',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center',
          padding: 20,
          gap: 10,
        }}
      >
        <IcBaselineArrowBackIosNew />
        <Avatar
          style={{ width: '30px', height: '30px' }}
          {...femaleAvatarConfig}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 12,
            alignItems: 'flex-start',
            flexGrow: 1,
          }}
        >
          <div>Clara</div>
          <div>En linea</div>
        </div>
        <div>
          <MdiDotsVertical />
        </div>
      </div>
      <div className={styles.chatContainer}>{children}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          bottom: -425,
          zIndex: 100,
        }}
      >
        <Avatar
          style={{ width: '40px', height: '40px' }}
          {...maleAvatarConfig}
        />
        <AudioChatBubble
          style={{ boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
      <div className={styles.chatInputContainer}>
        <div className={styles.chatInput}>Message</div>
        <button className={styles.chatInputButton}>
          <MdiTelegram />
        </button>
      </div>
    </div>
  );
};

export const Messages = () => (
  <>
    <RightChatBubble>Hola, soy Clara!</RightChatBubble>
    <RightChatBubble>
      Vi, que estas en <br /> busqueda de
      <br /> un Programador?
    </RightChatBubble>
    <LeftChatBubble>Hola Leo</LeftChatBubble>
    <LeftChatBubble>Si, busco un FullStack</LeftChatBubble>
    <LeftChatBubble>Te interasa saber mas?</LeftChatBubble>
    <RightChatBubble>Si, claro</RightChatBubble>
    <RightChatBubble>Quiero mas Detalles</RightChatBubble>
    <LeftChatBubble>Te envio audio!!!</LeftChatBubble>
  </>
);
