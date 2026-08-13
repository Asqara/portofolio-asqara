import { useExtracted } from "next-intl";

export function useProjectCopy(slug: string) {
  const t = useExtracted("project-data");

  switch (slug) {
    case "mysoc":
      return {
        subtitle: t("Integrated ERP · OMB IPB 63 × Agrisymphony 2026"), category: t("Platform Engineering"), role: t("Information Systems Coordinator"),
        shortDescription: t("An integrated operational platform connecting committee workflows, participant management, administration, and institutional stakeholders."),
        description: t("MySOC consolidates operational workflows that previously lived across disconnected tools. It gives teams a shared platform for participant data, administration, internal services, and cross-stakeholder coordination."),
        challenge: t("A large orientation operation involves distinct teams, changing access needs, time-sensitive participant data, and services that must continue working under concentrated traffic. Disconnected workflows created duplicated data and made coordination harder to audit."),
        solution: t("The platform was designed around service boundaries, role-based access, shared data contracts, and operational observability. Containerized services run on Kubernetes and k3s, backed by PostgreSQL and Redis, with deployment and service operations treated as part of the product."),
        impact: t("The result is a production system that connects internal workflows and stakeholder services while handling peak demand around 1,000 requests per second."),
        imageAlt: t("Abstract system map representing the MySOC operational platform"), metricLabel: t("peak requests / second"), status: t("Production"), platform: t("Web · Services · Infrastructure"),
        capabilities: ["Microservices", "RBAC", t("System Integration"), "Deployment", t("Production Operations")]
      };
    case "mysoc-helpdesk":
      return {
        subtitle: t("Support Portal · OMB IPB 63 × Agrisymphony 2026"), category: t("Support Experience"), role: t("Web Developer"),
        shortDescription: t("A focused help center that gives participants one dependable place to find guidance and support."),
        description: t("MySOC Helpdesk is the central support experience for OMB IPB 63 and Agrisymphony 2026. It turns scattered questions and operational guidance into a clear, accessible public destination."),
        challenge: t("Participants need accurate answers quickly during time-sensitive programs. When guidance is spread across channels, repeated questions grow and important information becomes harder to find."),
        solution: t("The help center organizes support content around participant needs, keeps navigation direct, and provides a responsive path from a question to the relevant guidance or support channel."),
        impact: t("The result is one production support surface serving two major programs, reducing friction between participants and the operational teams behind them."),
        imageAlt: t("MySOC Helpdesk interface represented as a technical support knowledge system"), metricLabel: t("programs supported"), status: t("Production"), platform: t("Public Web · Support"),
        capabilities: [t("Help Center"), t("Information Architecture"), t("Self-service Support"), t("Responsive UI")]
      };
    case "ormawa-eksekutif":
      return {
        subtitle: t("Organizational Platform · PKU IPB 2024/2025"), category: t("Organization Platform"), role: t("Web Developer"),
        shortDescription: t("A public information and publishing platform for one of PKU IPB's major student organizations."),
        description: t("The Ormawa Eksekutif PKU website provides a structured digital presence for organizational identity, programs, information, and public communication across the 2024/2025 period."),
        challenge: t("A major student organization needs to publish varied information without losing clarity, institutional character, or maintainability for the team operating it."),
        solution: t("The platform combines a Laravel application foundation with an Inertia interface, reusable content structures, and responsive presentation for public audiences and internal publishing workflows."),
        impact: t("The project established a dedicated, maintainable digital channel for the organization's 2024/2025 communication and program visibility."),
        imageAlt: t("Abstract publishing interface representing the Ormawa Eksekutif PKU website"), metricLabel: t("organizational period"), status: t("Delivered"), platform: t("Public Web · Publishing"),
        capabilities: [t("Public Website"), t("Content Publishing"), t("Information Architecture"), t("Responsive UI")]
      };
    case "studentorientation":
      return {
        subtitle: t("Student Platform · IPB University"), category: t("Data Infrastructure"), role: t("Information Systems Coordinator"),
        shortDescription: t("A centralized student platform for orientation, participant management, information delivery, and digital student services."),
        description: t("StudentOrientation turns incoming-student records into consistent operational data used across attendance, grouping, authentication, helpdesk, and other student services."),
        challenge: t("Thousands of incoming records needed cleaning, validation, and normalization before different teams could safely use them. The task was not simply storage—it was establishing one dependable data layer for multiple operational services."),
        solution: t("A structured pipeline standardized student records and exposed them through a centralized platform. The application joined participant authentication, attendance, grouping, information delivery, and helpdesk workflows without duplicating the source data."),
        impact: t("Approximately 8,000 incoming student records were organized for reuse across multiple services. The digital orientation implementation also received organic attention on X and became a reference for similar initiatives."),
        imageAlt: t("Abstract data pipeline representing StudentOrientation"), metricLabel: t("student records"), status: t("Delivered"), platform: t("Web · Data Services"),
        capabilities: [t("Data Cleaning"), "Validation", "Normalization", t("Digital Attendance"), "Authentication", "Helpdesk"]
      };
    case "agrisymphony-store":
      return {
        subtitle: t("Merchandise operations for MPKMB and Agrisymphony"), category: t("Commerce Platform"), role: t("Web Developer"),
        shortDescription: t("A digital merchandise platform supporting product, order, transaction, and production operations."),
        description: t("Agrisymphony Store provides one operational surface for merchandise ordering and transaction management across MPKMB and Agrisymphony activities."),
        challenge: t("Merchandise operations required a clear path from product presentation through ordering and transaction tracking, with enough structure for the team to operate it during active sales periods."),
        solution: t("The platform organizes catalog, order, and transaction workflows into a focused interface designed for both customer clarity and internal operations."),
        impact: t("The system supported more than Rp600 million in cumulative transaction value while keeping product and order operations in one dependable workflow."),
        imageAlt: t("Abstract commerce interface representing Agrisymphony Store"), metricLabel: t("cumulative transaction value"), status: t("Production"), platform: t("Web Commerce"),
        capabilities: [t("Product Management"), t("Ordering Workflow"), t("Transaction Management"), t("Production Operations")]
      };
    case "agrisymphony":
      return {
        subtitle: t("Public event website and digital ticketing"), category: t("Public Website & Ticketing"), role: t("Web Developer"),
        shortDescription: t("A public-facing event website and digital services supporting event information and ticketing."),
        description: t("Agrisymphony is the public digital entry point for event information and ticket access, balancing clear communication with reliable transaction-facing flows."),
        challenge: t("The public site had to communicate a distinct event identity while keeping event discovery and ticket access direct under real campaign traffic."),
        solution: t("The experience was structured around high-priority information, responsive presentation, and a focused path from event context to ticket purchase."),
        impact: t("The platform supported the processing of more than 1,000 ticket sales."),
        imageAlt: t("Abstract event ticketing artwork representing Agrisymphony"), metricLabel: t("ticket sales processed"), status: t("Delivered"), platform: t("Public Web"),
        capabilities: [t("Public Website"), "Ticketing", t("Responsive UI"), t("Production Operations")]
      };
    default:
      throw new Error(`Unknown project: ${slug}`);
  }
}
