import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb () {
  return open({
    filename: 'bagy.db',
    driver: sqlite3.Database
  })
}
