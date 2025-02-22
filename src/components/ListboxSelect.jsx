import { Listbox, Transition } from '@headlessui/react';
import { Icon as Iconify } from '@iconify-icon/react';
import { Fragment, useState } from 'react';

const ListboxSelect = ({ listBox, bgBtn, txtBtn, bgList, bgTxtItem, txtItem }) => {
    
  const [selected, setSelected] = useState(listBox[0]);
  
  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className={`${bgBtn} ${txtBtn} relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300`}>
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Iconify icon="heroicons-solid:selector" className={txtBtn} aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`${txtBtn} ${bgList} absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              {
                listBox.map((person, index) => {
                  return (
                    <Listbox.Option
                    key={index}
                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? bgTxtItem : txtItem}`}
                    value={person}>
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium ' : 'font-normal'}`}>
                            {person.name}
                          </span>
                          {selected ? (
                            <span className={`${txtBtn} absolute inset-y-0 left-0 flex items-center pl-3`}>
                              <Iconify icon="heroicons-solid:check" className="text-lg" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  )
                })
              }
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default ListboxSelect;