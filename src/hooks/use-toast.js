
import { useState, createContext, useContext, useEffect } from "react";

const TOAST_REMOVE_DELAY = 10000;

const ToastActionContext = createContext(undefined);

const ToastContext = createContext(undefined);

function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timeoutId = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, TOAST_REMOVE_DELAY);

      return () => clearTimeout(timeoutId);
    }
  }, [toasts]);

  const toast = (props) => {
    setToasts(prev => [
      ...prev,
      { id: Math.random().toString(36).substring(2, 9), ...props },
    ]);
  };

  const dismiss = (toastId) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  };

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

// Simplified toast actions
const toast = {
  success: (message) => {
    const context = useContext(ToastActionContext);
    context?.toast({ title: message, variant: 'default' });
  },
  error: (message) => {
    const context = useContext(ToastActionContext);
    context?.toast({ title: message, variant: 'destructive' });
  },
  info: (message) => {
    const context = useContext(ToastActionContext);
    context?.toast({ title: message, variant: 'default' });
  },
  warning: (message) => {
    const context = useContext(ToastActionContext);
    context?.toast({ title: message, variant: 'default' });
  },
};

export { useToast, ToastProvider, toast };
