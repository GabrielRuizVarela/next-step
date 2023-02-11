import {
  IcBaselineArrowBackIosNew,
  MdiDotsVertical,
  MdiPlay,
  MdiTelegram,
} from './Icons';
import styles from '@/styles/Home.module.css';
import {
  easeIn,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

const femaleAvatarConfig = genConfig('female');
const maleAvatarConfig = genConfig('man');

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const LeftChatBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: {};
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const Yscroll = useTransform(scrollYProgress, [0, 1], [0, -100], {
    clamp: false,
    ease: easeIn,
  });
  const controls = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className={styles.leftChatBubble}
      style={{ ...style, translateY: Yscroll }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

const RightChatBubble = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const Yscroll = useTransform(scrollYProgress, [0, 1], [0, -100], {
    clamp: false,
    ease: easeIn,
  });
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className={styles.rightChatBubble}
      ref={ref}
      style={{ translateY: Yscroll }}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

const AudioChatBubble = ({ style }: { style: {} }) => (
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

const Phone = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const Yscroll = useTransform(scrollYProgress, [0, 1], [0, -100], {
    clamp: false,
    ease: easeIn,
  });

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
        position: 'relative',
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
          id="clara"
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
          bottom: -70,
          zIndex: 100,
        }}
      >
        <motion.div style={{ translateY: Yscroll }}>
          <Avatar
            style={{ width: '40px', height: '40px' }}
            {...maleAvatarConfig}
            id="leo"
          />
        </motion.div>
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

export default Phone;
