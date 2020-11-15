import Link from "next/link";

export const Card = ({ id, name, description }) => (
    <div className="max-w-md h-64 flex p-6 bg-white rounded-lg shadow-md m-2">
        <div className="ml-6 pt-1">
            <h2 className="text-xl text-gray-900 leading-tight">{name}</h2>
            <p className="text-base text-gray-600 leading-normal">
                {description}
            </p>
            <div className="mt-4">
                <Link href={`/source/${encodeURIComponent(id)}`}>
                    <a className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-sm font-semibold rounded-full px-4 py-2 leading-normal">
                        See more
                    </a>
                </Link>
            </div>
        </div>
    </div>
);
