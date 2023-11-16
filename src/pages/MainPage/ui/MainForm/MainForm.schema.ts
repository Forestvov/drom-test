import * as yup from 'yup';

import { configSchema } from 'shared/lib/schema/configSchema';

export const schema = yup
    .object({
        city: configSchema.city,
        date: configSchema.date,
        time: configSchema.time,
        name: configSchema.name,
        phone: configSchema.phone,
    })
    .required();
