import { motion } from "framer-motion"
 export default function About() {
    return(
        <>
        <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
                 <h1 className="text-3xl text-center font-bold my-5 bg-blue-300 py-3 text-black">About ExpressWash.Ng</h1>
                <div className="flex my-5 justify-center align-center text-center">
               
                    <p>ExpressWash is a premier laundry service located in the heart of Ekpoma, Edo State. Renowned for our dedication to professionalism and meticulous attention to detail, we pride ourselves on providing top-notch care for your fabrics.
<br></br><br></br>
At ExpressWash, we understand the importance of convenience, which is why we offer free pickup and delivery services. Simply schedule a pickup time, and our team will collect your laundry right from your doorstep. We also provide express delivery, ensuring that your freshly laundered clothes are returned to you within 5-8 hours after pickup.
<br></br><br></br>
Convenience extends beyond our pickup and delivery services. You're welcome to visit our shop anytime to drop off your laundry in person. Our skilled staff will handle your garments with the utmost care, utilizing advanced techniques and premium products to ensure optimal results.
<br></br><br></br>
Our vision at ExpressWash is simple: to deliver freshness hassle-free. Whether it's a single garment or a full load of laundry, you can trust us to maintain the integrity of your fabrics while providing impeccable service. Experience the difference with ExpressWash – where quality and convenience meet.</p>
                </div>
            </motion.div>
        </>
    )
 }