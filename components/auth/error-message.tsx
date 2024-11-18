import { AnimatePresence, motion } from "framer-motion";

const ErrorMessage = ({
  message,
  icon: Icon,
}: {
  message: string;
  icon: React.ElementType;
}) => (
  <AnimatePresence>
    {message && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center space-x-2 text-red-500 mt-2"
      >
        <Icon className="h-4 w-4" />
        <span className="text-sm">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);
export default ErrorMessage;
