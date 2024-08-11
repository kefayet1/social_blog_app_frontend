
const MoreFrom = () => {
  return (
    <div className=' py-8 lg:py-5 bg-white mb-5 rounded-md'>
    <h2 className='font-bold text-xl mb-2 px-4'>More from <span className="text-blue-600">Poovarasu Sekar</span></h2>
    <hr/>
    <div className="allPost">
        <div className="post py-3 px-4">
            <p className="text-base">
            Stay Updated with PHP/Laravel: Weekly News Summary (24/06/2024 - 30/06/2024)
            </p>
            <div className="flex gap-2">
                <span>#php</span>
                <span>#laravel</span>
            </div>
        </div>
        <hr />

        <div className="post pt-3 px-4">
            <p className="text-base">
            Remote vs Office vs Hybrid?
            </p>
            <div className="flex gap-2">
                <span>#discuss</span>
                <span>#career</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default MoreFrom