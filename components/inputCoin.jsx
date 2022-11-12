import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  {
    id: 1,
    name: 'BTC',
    avatar:
      'https://www.svgrepo.com/show/354819/bitcoin.svg',
  },
  {
    id: 2,
    name: 'ETH',
    avatar:
      'https://www.svgrepo.com/show/366997/eth.svg',
  },
  {
    id: 3,
    name: 'LTC',
    avatar:
      'https://www.svgrepo.com/show/367552/ltc.svg',
  },
  {
    id: 4,
    name: 'USDT',
    avatar:
      'https://www.svgrepo.com/show/367256/usdt.svg',
  },
  {
    id: 5,
    name: 'SOL',
    avatar:
      'https://www.svgrepo.com/show/367211/sol.svg',
  },
  {
    id: 6,
    name: 'TRX',
    avatar:
      'https://www.svgrepo.com/show/367246/trx.svg',
  },
  {
    id: 7,
    name: 'DOGE',
    avatar:
      'https://www.svgrepo.com/show/366968/doge.svg',
  },
  {
    id: 8,
    name: 'BNB',
    avatar:
      'https://www.svgrepo.com/show/366901/bnb.svg',
  },
  {
    id: 9,
    name: 'BNB',
    avatar:
      'https://www.svgrepo.com/show/367372/bnb.svg',
  },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InputCoin() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected} >
      {({ open }) => (
        <>
          
          <div className="relative mt-1 w-64 ">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 mb-2 mt-4 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 h-14 sm:text-sm">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
