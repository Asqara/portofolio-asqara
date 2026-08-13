import { MotionReveal } from "@/components/motion/motion-reveal";
import { EngineeringVelocity } from "@/components/react-bits/scroll-velocity";
import { Contact } from "@/components/sections/contact";
import { DataInfrastructure } from "@/components/sections/data-infrastructure";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OtherWork } from "@/components/sections/other-work";
import { PlatformEngineering } from "@/components/sections/platform-engineering";
import { Principles } from "@/components/sections/principles";
import { ProfileStatus } from "@/components/sections/profile-status";
import { SelectedWork } from "@/components/sections/selected-work";
import { Technology } from "@/components/sections/technology";
import { RepositoryArchive } from "@/components/sections/repository-archive";

export default function HomePage() {
  return <><Hero /><MotionReveal><Principles /></MotionReveal><MotionReveal><SelectedWork /></MotionReveal><EngineeringVelocity /><MotionReveal direction="right"><PlatformEngineering /></MotionReveal><MotionReveal><DataInfrastructure /></MotionReveal><MotionReveal direction="left"><Technology /></MotionReveal><MotionReveal><OtherWork /></MotionReveal><MotionReveal><RepositoryArchive /></MotionReveal><MotionReveal><Experience /></MotionReveal><MotionReveal><ProfileStatus /></MotionReveal><MotionReveal direction="right"><Contact /></MotionReveal></>;
}
