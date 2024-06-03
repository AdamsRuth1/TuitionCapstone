import { motion } from "framer-motion"
export default function Service() {
    return(
        <>
        <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h1 className="text-3xl py-3 bg-blue-400 text-center font-bold my-5">Our Services</h1>
            <div className="flex   shadow bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-bubbles-flowing-water-water-pattern-poster-background-material-image_125417.jpg')]"> hello world</div>
            </motion.div>
        </>
    )
}