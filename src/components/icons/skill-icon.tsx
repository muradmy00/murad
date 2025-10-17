
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiSolidity,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReactrouter,
  SiVite,
  SiYarn,
  SiC,
  SiCplusplus,
  SiPython,
  SiReacthookform,
  SiExpo,
  SiAxios,
  SiYup,
} from '@icons-pack/react-simple-icons';

type SkillIconProps = {
  skillName: string;
  className?: string;
};

export const SkillIcon = ({ skillName, className }: SkillIconProps) => {
  switch (skillName) {
    case 'React.js':
    case 'React':
      return <SiReact className={className} color="#61DAFB" />;
    case 'Next.js':
      return <SiNextdotjs className={className} color="#FFFFFF" />;
    case 'TypeScript':
      return <SiTypescript className={className} color="#3178C6" />;
    case 'JavaScript':
      return <SiJavascript className={className} color="#F7DF1E" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className={className} color="#06B6D4" />;
    case 'Node.js':
      return <SiNodedotjs className={className} color="#339933" />;
    case 'Solidity':
        return <SiSolidity className={className} color="#363636" />;
    case 'Figma':
      return <SiFigma className={className} color="#F24E1E" />;
    case 'HTML':
        return <SiHtml5 className={className} color="#E34F26" />;
    case 'CSS':
        return <SiCss3 className={className} color="#1572B6" />;
    case 'Redux':
        return <SiRedux className={className} color="#764ABC" />;
    case 'React Native':
        return <SiReact className={className} color="#61DAFB" />;
    case 'React Router DOM':
        return <SiReactrouter className={className} color="#CA4245" />;
    case 'Vite':
        return <SiVite className={className} color="#646CFF" />;
    case 'Yarn':
        return <SiYarn className={className} color="#2C8EBB" />;
    case 'C':
        return <SiC className={className} color="#A8B9CC" />;
    case 'C++':
        return <SiCplusplus className={className} color="#00599C" />;
    case 'Python':
        return <SiPython className={className} color="#3776AB" />;
    case 'React Hook Form':
        return <SiReacthookform className={className} color="#EC5990" />;
    case 'Expo':
        return <SiExpo className={className} color="#000020" />;
    case 'Axios':
        return <SiAxios className={className} color="#5A29E4" />;
    case 'Tanstack Query':
        return null;
    case 'Yup':
        return <SiYup className={className} color="#5964E8" />;
    default:
      return null;
  }
};
