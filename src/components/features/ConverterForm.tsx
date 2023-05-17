import React, { useState } from "react";
import { convertBusdToNep, convertNepdToBusd } from "@/core/utils/converter";
import { Currency } from "@/core/interfaces";

export default function ConverterForm() {
    const defaultCurrencyValue : Currency = { nep: 0, busd: 0 };
    const [currency, setCurrency] = useState<Currency>(defaultCurrencyValue);

    const onChangeBusdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let convertedCurrencyValues = defaultCurrencyValue;

        if(event.target.value != '') {
            const numValue: number = parseFloat(event.target.value);
            convertedCurrencyValues = { nep: convertBusdToNep(numValue), busd: numValue };
        }
        setCurrency(convertedCurrencyValues);
    }

    const onChangeNepInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let convertedCurrencyValues = defaultCurrencyValue;

        if(event.target.value != '') {
            const numValue: number = parseFloat(event.target.value);
            convertedCurrencyValues = { nep: numValue, busd : convertNepdToBusd(numValue) };
        }
        setCurrency(convertedCurrencyValues);
    }

    return (
        <>
            <div className="mb-4">
                <h2 className="text-2xl leading-9 tracking-wide font-medium text-gray-900">Currency converter</h2>
            </div>

            <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="nep" className="block tracking-wider text-sm font-normal leading-6 text-gray-900">NEP</label>
                        <div className="mt-2 w-80">
                            <input
                                id="nep"
                                name="nep"
                                type="number"
                                placeholder="0.00"
                                required
                                value={currency.nep || ""}
                                onChange={onChangeNepInput}
                                step=".01"
                                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="busd" className="block tracking-wider text-sm font-normal leading-6 text-gray-900">BUSD</label>
                        <div className="mt-2  w-80">
                            <input
                                id="busd"
                                name="busd"
                                type="number"
                                placeholder="0.00"
                                value={currency.busd || ""}
                                onChange={onChangeBusdInput}
                                required
                                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}