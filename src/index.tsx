import React, { forwardRef } from "react"

import { createLazyIconComponent } from "./utils"

export type { TIconProps } from "./types"
export { ArgoCDIcon } from "./ArgoCD"
export { DevPodIcon } from "./DevPod"
export { JiraIcon } from "./Jira"
export { JupyterNotebookBrowserRunIcon } from "./JupyterNotebookBrowserRun"
export { KubernetesIcon } from "./Kubernetes"
export { LinearIcon } from "./Linear"
export { DevPodProIcon } from "./DevPodPro"
export { ExternalLinkIcon } from "./ExternalLink"
export { HelmIcon } from "./Helm"
export { ProvidersIcon } from "./Providers"
export { RancherIcon } from "./Rancher"
export { TemplatesIcon } from "./Templates"
export { VClusterIcon } from "./VCluster"
export { VClusterProBadgeIcon } from "./VClusterProBadge"
export { VClusterOSSBadgeIcon } from "./VClusterOSSBadge"
export { VSCodeBrowserRunIcon } from "./VSCodeBrowserRun"
export { CirclePendingOutlinedIcon } from "./CirclePendingOutlined"
export { CodeIcon } from "./Code"
export { ClipboardIcon } from "./Clipboard"
export { CheckCircleOutlineFilledIcon } from "./CheckCircleOutlinedFilled"
export { BackupIcon } from "./BackupIcon"
export { RestoreIcon } from "./RestoreIcon"
export { SleepIcon } from "./SleepIcon"
export { NotFoundIcon } from "./NotFoundIcon"
export { ExternallyManagedIcon } from "./ExternallyManagedIcon"
export { EditPencilIcon } from "./EditPencil"
export { VClusterRocketIcon } from "./VClusterRocket"
export * from "./ExternallyDeployedIcons"
export { ExpandIcon } from "./ExpandIcon"
export { RegexIcon } from "./RegexIcon"
export { DragAreaIcon } from "./DragAreaIcon"
export { CollapseIcon } from "./CollapseIcon"
export { KubernetesOutlinedIcon } from "./KubernetesOutlined"

const FallbackIcon = forwardRef<HTMLSpanElement>(() => <span />)
FallbackIcon.displayName = "FallbackIcon"

export const AlignLeftOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/AlignLeftOutlined")
)
export const CheckSquareOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CheckSquareOutlined")
)

export const FontSizeOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FontSizeOutlined")
)

export const FieldBinaryOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FieldBinaryOutlined")
)

export const LeftOutlined = createLazyIconComponent(() => import("@ant-design/icons/LeftOutlined"))

export const BarsOutlined = createLazyIconComponent(() => import("@ant-design/icons/BarsOutlined"))

export const ColumnWidthOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ColumnWidthOutlined")
)

export const RightOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/RightOutlined")
)

export const DisconnectOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DisconnectOutlined")
)

export const DownloadOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DownloadOutlined")
)

export const DeleteOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DeleteOutlined")
)

export const HddTwoTone = createLazyIconComponent(() => import("@ant-design/icons/HddTwoTone"))

export const CloseOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CloseOutlined")
)

export const PlusCircleTwoTone = createLazyIconComponent(
  () => import("@ant-design/icons/PlusCircleTwoTone")
)

export const CopyOutlined = createLazyIconComponent(() => import("@ant-design/icons/CopyOutlined"))

export const MinusCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/MinusCircleOutlined")
)

export const PlusCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/PlusCircleOutlined")
)

export const CaretDownOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CaretDownOutlined")
)

export const CloseCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/CloseCircleFilled")
)

export const GithubOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/GithubOutlined")
)

export const LinkOutlined = createLazyIconComponent(() => import("@ant-design/icons/LinkOutlined"))

export const PlusCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/PlusCircleFilled")
)

export const UserSwitchOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/UserSwitchOutlined")
)

export const DownOutlined = createLazyIconComponent(() => import("@ant-design/icons/DownOutlined"))

export const FolderOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FolderOutlined")
)

export const PlusOutlined = createLazyIconComponent(() => import("@ant-design/icons/PlusOutlined"))

export const TagsOutlined = createLazyIconComponent(() => import("@ant-design/icons/TagsOutlined"))

export const ToolOutlined = createLazyIconComponent(() => import("@ant-design/icons/ToolOutlined"))

export const ArrowRightOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ArrowRightOutlined")
)

export const CaretUpOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CaretUpOutlined")
)

export const GoldOutlined = createLazyIconComponent(() => import("@ant-design/icons/GoldOutlined"))

export const AuditOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/AuditOutlined")
)

export const CloudOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CloudOutlined")
)

export const ExpandOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ExpandOutlined")
)

export const LoginOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/LoginOutlined")
)

export const ControlOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ControlOutlined")
)

export const HddOutlined = createLazyIconComponent(() => import("@ant-design/icons/HddOutlined"))

export const NotificationOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/NotificationOutlined")
)

export const SolutionOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/SolutionOutlined")
)

export const UserOutlined = createLazyIconComponent(() => import("@ant-design/icons/UserOutlined"))

export const CalendarOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CalendarOutlined")
)

export const AppstoreAddOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/AppstoreAddOutlined")
)

export const CodeOutlined = createLazyIconComponent(() => import("@ant-design/icons/CodeOutlined"))

export const FileTextOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FileTextOutlined")
)

export const FileOutlined = createLazyIconComponent(() => import("@ant-design/icons/FileOutlined"))

export const ReloadOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ReloadOutlined")
)

export const UpOutlined = createLazyIconComponent(() => import("@ant-design/icons/UpOutlined"))

export const PauseOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/PauseOutlined")
)

export const UpCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/UpCircleFilled")
)

export const MinusSquareOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/MinusSquareOutlined")
)

export const PlusSquareOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/PlusSquareOutlined")
)

export const QuestionCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/QuestionCircleOutlined")
)

export const LoadingOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/LoadingOutlined")
)

export const EditFilled = createLazyIconComponent(() => import("@ant-design/icons/EditFilled"))

export const ClockCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ClockCircleOutlined")
)

export const TeamOutlined = createLazyIconComponent(() => import("@ant-design/icons/TeamOutlined"))

export const ContainerOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ContainerOutlined")
)

export const SearchOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/SearchOutlined")
)

export const CheckOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CheckOutlined")
)

export const EllipsisOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/EllipsisOutlined")
)

export const WarningOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/WarningOutlined")
)

export const MoreOutlined = createLazyIconComponent(() => import("@ant-design/icons/MoreOutlined"))

export const CheckCircleTwoTone = createLazyIconComponent(
  () => import("@ant-design/icons/CheckCircleTwoTone")
)

export const ExclamationCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/ExclamationCircleFilled")
)

export const CloseCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CloseCircleOutlined")
)

export const InfoCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/InfoCircleOutlined")
)

export const FileSyncOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FileSyncOutlined")
)

export const FileProtectOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/FileProtectOutlined")
)

export const ToTopOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ToTopOutlined")
)

export const CheckCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/CheckCircleFilled")
)

export const CheckCircleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CheckCircleOutlined")
)

export const GitlabOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/GitlabOutlined")
)

export const GoogleOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/GoogleOutlined")
)

export const SettingOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/SettingOutlined")
)

export const ApiOutlined = createLazyIconComponent(() => import("@ant-design/icons/ApiOutlined"))

export const AppstoreOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/AppstoreOutlined")
)

export const UploadOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/UploadOutlined")
)

export const BlockOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/BlockOutlined")
)

export const DatabaseOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DatabaseOutlined")
)

export const CoffeeOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CoffeeOutlined")
)

export const LockOutlined = createLazyIconComponent(() => import("@ant-design/icons/LockOutlined"))

export const ShareAltOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ShareAltOutlined")
)

export const DoubleRightOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DoubleRightOutlined")
)

export const SyncOutlined = createLazyIconComponent(() => import("@ant-design/icons/SyncOutlined"))

export const BookOutlined = createLazyIconComponent(() => import("@ant-design/icons/BookOutlined"))

export const HourglassOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/HourglassOutlined")
)

export const RetweetOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/RetweetOutlined")
)

export const ApartmentOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ApartmentOutlined")
)

export const CloudServerOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CloudServerOutlined")
)

export const ClusterOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ClusterOutlined")
)

export const FireOutlined = createLazyIconComponent(() => import("@ant-design/icons/FireOutlined"))

export const SaveOutlined = createLazyIconComponent(() => import("@ant-design/icons/SaveOutlined"))

export const SwapOutlined = createLazyIconComponent(() => import("@ant-design/icons/SwapOutlined"))

export const DashboardOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/DashboardOutlined")
)

export const ImportOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ImportOutlined")
)

export const UnlockOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/UnlockOutlined")
)

export const UpdateOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ArrowUpOutlined")
)

export const ArrowDownOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ArrowDownOutlined")
)

export const FlagOutlined = createLazyIconComponent(() => import("@ant-design/icons/FlagOutlined"))

export const ExperimentOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/ExperimentOutlined")
)

export const BulbOutlined = createLazyIconComponent(() => import("@ant-design/icons/BulbOutlined"))

export const KubernetesOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/KubernetesOutlined")
)

export const InfoCircleFilled = createLazyIconComponent(
  () => import("@ant-design/icons/InfoCircleFilled")
)

export const UserAddOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/UserAddOutlined")
)

export const KeyOutlined = createLazyIconComponent(() => import("@ant-design/icons/KeyOutlined"))

export const WarningFilled = createLazyIconComponent(
  () => import("@ant-design/icons/WarningFilled")
)

export const SlackOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/SlackOutlined")
)

export const ReadOutlined = createLazyIconComponent(() => import("@ant-design/icons/ReadOutlined"))

export const CloudUploadOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/CloudUploadOutlined")
)

export const Loading3QuartersOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/Loading3QuartersOutlined")
)

export const PieChartOutlined = createLazyIconComponent(
  () => import("@ant-design/icons/PieChartOutlined")
)
