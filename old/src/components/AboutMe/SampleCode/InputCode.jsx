const InputCode = () => {
    return (
        <div
            className=" px-5 pt-4 text-[11px] h-[171px] rounded-lg border border-[#1E2D3D] bg-[#011221] no-scrollbar overflow-x-auto whitespace-nowrap">
                                        <span className=""><span className="text-[#E99287]">function</span> initializeModelChunk<span
                                            className="text-[#FEA55F]">{`<`}<span
                                            className="text-[#E99287]">T</span>{`>`}(</span><span
                                            className="text-[#43D9AD]">chunk</span>: <span
                                            className="text-[#3A49A4]">ResolvedModelChunk</span><span
                                            className="text-[#FEA55F]">)</span>: <span
                                            className="text-[#E99287]">T</span> <span
                                            className="text-[#FEA55F]">{`{`}</span><br/></span>
            <span className="pl-5"><span
                className="text-[#E99287]">const</span> <span className="text-[#C98BDF]">value</span>: <span
                className="text-[#E99287]">T</span> = <span className="text-[#FEA55F]">parseModel(</span><span
                className="text-[#43D9AD]">chunk</span>.<span className="text-[#C98BDF]">_response</span>, <span
                className="text-[#43D9AD]">chunk</span>.<span className="text-[#C98BDF]">_value</span><span
                className="text-[#FEA55F]">)</span>;</span><br/>
            <span className="pl-5"><span className="text-[#E99287]">const</span> <span
                className="text-[#3A49A4]">initializedChunk</span>: <span
                className="text-[#3A49A4]">InitializedChunk</span><span
                className="text-[#FEA55F]">{`<`}<span
                className="text-[#E99287]">T</span>{`>`}</span> = <span className="text-[#FEA55F]">(</span><span
                className="text-[#43D9AD]">chunk</span>: <span
                className="text-[#E99287]">any</span><span className="text-[#FEA55F]">)</span>;</span><br/>
            <span className="pl-5"><span className="text-[#3A49A4]">initializedChunk</span>.<span
                className="text-[#C98BDF]">_status</span> = <span
                className="text-[#3A49A4] font-bold">INITIALIZED</span>;</span><br/>
            <span className="pl-5"><span className="text-[#3A49A4]">initializedChunk</span>.<span
                className="text-[#C98BDF]">_value</span> = <span className="text-[#C98BDF]">value</span>;</span><br/>
            <span className="pl-5"><span
                className="text-[#E99287]">return</span> <span className="text-[#C98BDF]">value</span>;</span><br/>
            <span className="text-[#FEA55F]">{`}`}</span>
        </div>
    )
}


export default InputCode