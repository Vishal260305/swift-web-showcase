
import { useTheme } from "@/context/ThemeContext"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  position = "bottom-right",
  theme: defaultTheme,
  richColors = false,
  className,
  ...props
}) => {
  const { theme } = useTheme()
  const toasterTheme = defaultTheme || theme || "system"

  return (
    <Sonner
      theme={toasterTheme}
      className={className}
      richColors={richColors}
      position={position}
      {...props}
    />
  )
}

export { Toaster }
