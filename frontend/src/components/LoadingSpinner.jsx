import { motion} from 'framer-motion'
import React from 'react'

const LoadingSpinner = () => {
  return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
          {/* Simple Loading Spinner */}
          <motion.div
              className='w-16 border-4 border-t-4 border-t-green-500  border-green-500 rounded-full'
              animate={{ rotate: 360 }}
              transition={{duration:1,repeat:Infinity,ease:"linear"}}
          >
              
          </motion.div>
    </div>
  )
}

export default LoadingSpinner