"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import s from "./whatwedo.module.css"
import data from "./whatwedo_data"

export default function WhatwedoSection() {
	let getClasses = i => `${s.section} ${i == selected ? s.active : ""}`

	let [mobile, setMobile] = useState(true)
	let [selected, setSelected] = useState(mobile ? -2 : 0)

	console.log(mobile)
	let refs = new Array(data.length).fill(0).map(i => useRef())

    function handleResize () {
        let isMobile = window.innerWidth < 1000
        setMobile(isMobile)

        if (!isMobile && selected == -2) setSelected(0)
    }

	useEffect(() => {
		window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
		if (!mobile) return
		if (selected == -2) return

		if (selected == -1)
			window.scrollTo({
				top: refs[0].current.offsetTop - 200,
				behavior: "smooth"
			})
		else
			window.scrollTo({
				top: refs[selected].current.offsetTop - 100,
				behavior: "smooth"
			})
	}, [selected])

	function handleClick(i) {
		if (mobile && selected == i) setSelected(-1)
		else setSelected(i)
	}


	return (
		<section id="whatwedo" className={s.initiatives}>
			<h1>What We Do</h1>
			<div className={s.content}>
				<div
					className={`${s.left} ${s.small}`}
				>
                    {
                        data.map(({ title, description, Icon, icon_color }, i) => (
                            <Fragment key={i}>
                                <div
                                    className={getClasses(i)}
                                    onClick={() => handleClick(i)}
                                    ref={refs[i]}
                                >
                                    <Icon size={35} />
                                    <p className="text-sky-900">
                                        {title}
                                    </p>
                                </div>

								{
									selected == i && mobile ? 
									<div className={s.right}>
										{content({ title, description, Icon }, true)}
									</div>
									: null
								}
                            </Fragment>
                        ))
                    }
                </div>

				<div className={`${s.right} ${selected != 0 ? s.open : ""}`}>
                    {
                        data.map((d, i) => (selected == i && !mobile ? <Fragment key={i}>{content(d, false)}</Fragment> : null))
                    }
				</div>
			</div>
		</section>
	)
}

let content = ({ title, description, Icon, icon_color }, mobile) => (
	<div className={s.section}>
		{
			!mobile ? 
				<div className="p-7 rounded-full bg-white">
					<Icon size={80} style={{color: icon_color}} />
				</div>
			: null
		}
		<div className={s.text}>
			{!mobile ? (
				<h2>
					{title}
				</h2>
			) : null}
			<p>
				{description}
			</p>
		</div>
	</div>
)