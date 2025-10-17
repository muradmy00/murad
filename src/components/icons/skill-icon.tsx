
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
  switch (skillName) {
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
    case 'Git & GitHub':
      return <SiGit className={className} color="#F05032" />;
    case 'Figma':
      return <SiFigma className={className} color="#F24E1E" />;
    default:
      return null;
  }
};
