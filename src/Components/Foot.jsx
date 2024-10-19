import React from 'react'

const Foot = () => {
  return (
    <div >
      <footer className='w-full  py-10 bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
    <div>
    <img src="https://halloffame.pwskills.com/images/PWSkills-white.png" className='h-16 w-40' />
    <p className='my-4'>Email us: support@pwskills</p>
    <img src="	https://cdn-icons-png.freepik.com/512/9449/9449577.png?ga=GA1.2.256969904.1719852894" className='h-16 '/>
    </div>
    <div>
        <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
        <div className='border-2 h-1 border-yellow-400 my-2 w-[100px]'></div>
        <div><ul>
            <a href="#"><li>About us</li></a>
            <a href="#"><li>FAQs</li></a>
            <a href="#"><li>Privacy Policy</li></a>
           
            </ul>
        </div>
    </div>

    <div>
        <h2 className='font-bold text-xl mt-4'>Products</h2>
        <div className='border-2 h-1 border-yellow-400 my-2 w-[100px]'></div>
        <div><ul>
        <a href="#"><li>PW Skills Lab</li></a>
        <a href="#"><li>Job Portal</li></a>
        <a href="#"><li>Experience Portal</li></a>
        <a href="#"><li>Affiliate</li></a>
        <a href="#"><li>Hall of Fame</li></a>
            </ul>
        </div>
    </div>

    <div>
        <h2 className='font-bold text-xl mt-4'>Links</h2>
        <div className='border-2 h-1 border-yellow-400 my-2 w-[100px] '></div>
        <div><ul>
        <a href="#"><li>Discord Channel</li></a>
        <a href="#"><li>PW Youtube</li></a>
        <a href="#"><li>Careers</li></a>
            
            </ul>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Foot
