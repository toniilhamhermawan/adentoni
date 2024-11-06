import React from 'react';

// Object berisi informasi pribadi
const MyInfos = {
    ttl: 'Bandung, 1 April 2004',
    gender: 'Laki-laki',
    tinggiBadan: '170 cm',
    beratBadan: '60 kg',
    statusPernikahan: 'Belum Menikah',
    whatsapp: '+62 8389-4380-928',
    email: 'toniilham1915@gmail.com',
};

export default function PersonalInfoSection() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-black font-bold">Personal Info</h2>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-gray-300 p-5 my-5">
                <div className="container mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                    <div>
                        <strong>TTL:</strong> {MyInfos.ttl}
                    </div>
                    <div>
                        <strong>Gender:</strong> {MyInfos.gender}
                    </div>
                    <div>
                        <strong>Tinggi Badan:</strong> {MyInfos.tinggiBadan}
                    </div>
                    <div>
                        <strong>Berat Badan:</strong> {MyInfos.beratBadan}
                    </div>
                    <div>
                        <strong>Status Pernikahan:</strong> {MyInfos.statusPernikahan}
                    </div>
                    <div>
                        <strong>WhatsApp:</strong> {MyInfos.whatsapp}
                    </div>
                    <div>
                        <strong>Email:</strong> {MyInfos.email}
                    </div>
                </div>
            </div>
        </div>
    );
}
