import {
  ClipboardList,
  Compass,
  DraftingCompass,
  HardHat,
  Layers3,
  MessageSquare,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin by understanding your vision, requirements, site, priorities and the practical goals of the project.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Concept",
    description:
      "Ideas are explored and shaped into a clear design direction that responds to the project's purpose and context.",
  },
  {
    number: "03",
    icon: DraftingCompass,
    title: "Design & Engineering",
    description:
      "Architectural, structural, mechanical, electrical and other technical considerations are developed into a coordinated solution.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Visualisation",
    description:
      "3D modelling and realistic visualisation help you understand how the proposed space will look and feel before execution.",
  },
  {
    number: "05",
    icon: HardHat,
    title: "Construction",
    description:
      "Approved designs move into practical execution, construction or renovation with attention to quality and detail.",
  },
  {
    number: "06",
    icon: ClipboardList,
    title: "Handover",
    description:
      "The completed project is reviewed and brought together as a finished space ready for its intended purpose.",
  },
];