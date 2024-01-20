"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components'
import useDebounce from '@/hooks/useDebounce'
import qs from 'query-string'

const SearchInput = () => {
   const router = useRouter();
   const [value, setValue] = useState<string>('');
   const debouncedValue = useDebounce<string>(value, 500);

   useEffect(() => {
      const query = { title: debouncedValue };
      const url = qs.stringifyUrl({ url: '/search', query: query });
      router.push(url);
   }, [debouncedValue, router]);

   return (
     <Input
       value={value}
       placeholder='What do you want to listen to?'
       onChange={(e) => setValue(e.target.value)}
     />
   )
}

export default SearchInput