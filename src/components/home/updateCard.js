export default function UpdateCard ({ update }) {
    return (
        <div className="w-[30%] shadow-md rounded-lg hover:-translate-y-2 duration-200 cursor-pointer">
            <img className="max-w-full rounded-t-lg" src={update.image} alt="" />
            <h1 className="text-lg font-semibold p-5">{update.title}</h1>
        </div>
    )
}