require("dotenv").config();

import { ObjectID } from "mongodb";
import { connectDatabase } from '../src/database';
import {Listing} from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();
    const listings: Listing[] = [
   //    {
   //      _id: new ObjectID(),
   //      property:"Sample Property 1",
   //      latitude:43.641382,
   //      longitude:-79.431819,
   //      city:"Toronto",
   //      country:"Canada",
   //      monthly_rate:1100,
   //      lease_term_months:12,
   //      total_views:11091
   //   },
   //   {
   //      _id: new ObjectID(),
   //      property:"Sample Property 2",
   //      latitude:43.646583,
   //      longitude:-79.407402,
   //      city:"Toronto",
   //      country:"Canada",
   //      monthly_rate:1100,
   //      lease_term_months:12,
   //      total_views:11447
   //   },
   //   {
   //      _id: new ObjectID(),
   //      property:"Sample Property 3",
   //      latitude:43.64667,
   //      longitude:-79.40717,
   //      city:"Toronto",
   //      country:"Canada",
   //      monthly_rate:1100,
   //      lease_term_months:12,
   //      total_views:8261
   //   }
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
    console.log("[seed] : success");

  } catch {
    throw new Error("failed to seed databse");
  }
};

seed();

