import React from "react";
import { motion } from "framer-motion"
export default function Landing() {
    return(
        
        <>
      <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
    <div className="flex justify-center bg-[url(&apos;https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-bubbles-flowing-water-water-pattern-poster-background-material-image_125417.jpg&apos;)]">

    <div className="py-3 px-8 my-12 text-center md:text-left flex flex-col justify-center items-center">

        <h1 className="text-3xl md:text-xl font-bold text-black my-12">Best Dry Cleaning Service in<br className="md:hidden"/> Ekpoma, Edo State<br className="md:hidden"/> Our delivery is topnotch</h1>
        <button className="py-3 px-3 rounded-xl my-12 font-bold bg-white ">
            <a href="https://wa.link/5rdxxg">Schedule a pickup</a>
        </button>
    </div>
    {/* <div className="py-8">
        {/* <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--WsgpFCd6--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1627909735000/1.png" /> */}
    {/* </div> */}
</div>

</motion.div>

        </>
    );
}