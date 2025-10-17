
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiSolidity,
  SiGit,
  SiFigma,
} from '@icons-pack/react-simple-icons';

type SkillIconProps = {
  skillName: string;
  className?: string;
};

export const SkillIcon = ({ skillName, className }: SkillIconProps) => {
  switch (skillName.toLowerCase()) {
    case 'react':
      return <SiReact className={className} color="#61DAFB" />;
    case 'next.js':
      return <SiNextdotjs className={className} color="#FFFFFF" />;
    case 'typescript':
      return <SiTypescript className={className} color="#3178C6" />;
    case 'javascript':
      return <SiJavascript className={className} color="#F7DF1E" />;
    case 'tailwind css':
      return <SiTailwindcss className={className} color="#06B6D4" />;
    case 'node.js':
      return <SiNodedotjs className={className} color="#339933" />;
    case 'solidity':
        return <SiSolidity className={className} color="#363636" />;
    case 'git & github':
      return <SiGit className={className} color="#F05032" />;
    case 'figma':
      return <SiFigma className={className} color="#F24E1E" />;
    default:
      return null;
  }
};
