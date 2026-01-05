import { motion } from 'framer-motion';

export default function Reveal({ children}) {
    return (
        <motion.div
            initial = {{opacity: 0, y: 60}}
            animate = {{opacity: 1, y: 0}}
            transition = {{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}