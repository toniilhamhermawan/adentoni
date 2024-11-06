export default function RiwayatPekerjaan() {
    return (
        < div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-black font-bold"> Riwayat Pendidikan</h2>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-1">
                        <div className="col-span-12 md:col-span-4">2020 - 2024</div>
                        <div className="col-span-12 md:col-span-4">PT. IDOLA</div>
                        <div className="col-span-12 md:col-span-4">CEO</div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-1">
                        <div className="col-span-12 md:col-span-4">2024 - 2025</div>
                        <div className="col-span-12 md:col-span-4">PT. MAKMUR</div>
                        <div className="col-span-12 md:col-span-4">DIREKTUR</div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-1">
                        <div className="col-span-12 md:col-span-4">2025 - 2027</div>
                        <div className="col-span-12 md:col-span-4">PT. GOLD</div>
                        <div className="col-span-12 md:col-span-4">DIREKTUR</div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-1">
                        <div className="col-span-12 md:col-span-4">2027 - 2030</div>
                        <div className="col-span-12 md:col-span-4">PT. WEST JAVA</div>
                        <div className="col-span-12 md:col-span-4">CEO</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
}

function RowRiwayat(props: RowRiwayatProps) {
    return (
        <div className="border-2 border-indigo-600/75 rounded-lg bg-gray-800 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-1">
                    <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
                    <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                </div>
            </div>
        </div>
    )
}