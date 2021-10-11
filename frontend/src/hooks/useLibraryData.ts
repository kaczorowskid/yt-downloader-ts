import { useContext } from 'react';
import { LibraryContentContext } from '../context/LibraryContentContext/LibraryContentContext';

export const useLibraryData = () => useContext(LibraryContentContext)